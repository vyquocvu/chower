import React, { useState } from 'react';
import SideBar from './components/SideBar';
import MainContainer from './components/MainContainer';

import './App.css'

function App() {
  const [ webSites, setWebSites ] = useState([]);
  const switchSite = index => () => {
    const curr = webSites[index] ? {...webSites[index]} : {};
    setCurrentSite(curr);
  }
  const addSite = site => {
    const sites = [...webSites, site];
    setWebSites(sites);
    setCurrentSite(site)
  }
  const [ currentSite, setCurrentSite ] = useState({});

  return <div className="font-sans antialiased h-screen w-screen flex">
    <SideBar webSites={webSites} onSwitch={switchSite} />
    <MainContainer site={currentSite} onAddSite={addSite} />
  </div>
}

export default App