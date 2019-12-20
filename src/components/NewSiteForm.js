import React, { useState } from 'react';

function NewSiteForm(props) {
  const [site, setSite] = useState({ title: '', url: '', icon: '' });
  let [error, setError] = useState(null);
  const { onAddSite } = props
  const onChange = (e) => {
    const newSite = {...site, [e.target.id]: e.target.value };
    if (!error) setError(null);
    setSite(newSite);
  }

  const submit = () => {
    try {
      new URL(site.url)
    } catch (error) {
      return setError({ msg: 'Please Enter a URL' });
    }
    onAddSite(site);
  }

  return (
    <div>
      <div className={`bg-red-100 ${!error ? 'hidden': ''} border w-1/2 mx-auto my-16 border-red-400 text-red-700 px-4 py-3 rounded shadow-xl relative`} role="alert">
        <strong className="font-bold">Holy smokes!</strong>
        <span className="block sm:inline"> Invalid URL.</span>
        <span className="absolute top-0 bottom-0 right-0 px-4 py-3" onClick={() => setError(null)}>
          <svg className="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
        </span>
      </div>
      <form className="bg-white w-1/2 mx-auto my-16 shadow-xl rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title"> Title </label>
          <input
            type="text"
            id="title"
            onChange={onChange}
            value={site.title}
            placeholder="title"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="icon"> Icon </label>
          <input
            type="text"
            id="icon"
            value={site.icon}
            onChange={onChange}
            placeholder="https://facebook.com/favicon.ico"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="url"> Url </label>
          <input
            id="url"
            type="text"
            value={site.url}
            onChange={onChange}
            placeholder="https://facebook.com"
            className={`shadow appearance-none border ${error ? 'border-red-500' : ''} rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline`}
          />
          {error && <p className="text-red-500 text-xs italic">Please enter a url.</p>}
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={submit}
          > Add site </button>
        </div>
      </form>
    </div>
  )
}

export default NewSiteForm;