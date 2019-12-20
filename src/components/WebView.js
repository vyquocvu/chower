import React, { useEffect, useRef, useState } from 'react';
import Ripple from '../assets/ripple';

function WebView ({ site }) {
  const refView = useRef(null);
  const [isLoading, setLoading] = useState(false);


  const loadStart = () => {
    setLoading(true);
  }

  const loadStop = () => {
    setLoading(false);
  }

  useEffect(() => {
    if (refView.current) {
      refView.current.addEventListener('did-start-loading', loadStart);
      refView.current.addEventListener('did-stop-loading', loadStop);
    }
  }, [site.url]);
  return <div className="h-full w-full">
    <div className={`h-full w-full absolute bg-black opacity-50 flex ${isLoading ? '' : 'hidden'}`}>
      <Ripple />
    </div>
    <webview ref={refView} src={site.url} className="h-full w-full" />
  </div>
}

export default WebView;