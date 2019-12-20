import React from 'react';
import WebView from './WebView';
import NewSiteForm from './NewSiteForm';

function MainContainer(props) {
  const { site, onAddSite } = props;
  return (
    <div className="flex-1 flex flex-col bg-white overflow-hidden">
      {Object.keys(site).length ? <WebView site={site} /> : <NewSiteForm onAddSite={onAddSite} /> }
    </div>
  );
};

export default MainContainer;