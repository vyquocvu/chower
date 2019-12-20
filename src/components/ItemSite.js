import React from 'react';

function ItemSite(props) {
  const { site, index, switchSite } = props;
  return (
    <div className="cursor-pointer mb-4" onClick={switchSite}>
      <div className="h-12 w-12 flex items-center justify-center text-black text-2xl font-semibold rounded-lg mb-1 overflow-hidden">
        {site.icon ? <img className="w-5/6 h-auto" src={site.icon} alt="" /> : site.title[0] && site.title[0].toUpperCase() }
      </div>
      <div className="text-center text-white opacity-50 text-sm">&#8984;{index + 1}</div>
    </div>
  )
}

export default ItemSite;