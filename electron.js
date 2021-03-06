const electron = require('electron');
const app = electron.app;
const path = require('path');
const isDev = require('electron-is-dev');
require('electron-reload');
const BrowserWindow = electron.BrowserWindow;


let mainWindow

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1336,
    height: 720,
    webPreferences: {
      nodeIntegration: true,
      webviewTag: true
    },
  })
  mainWindow.webContents.openDevTools()
  mainWindow.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '../build/index.html')}`,
  )

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
});
