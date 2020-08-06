import React from 'react';

import './App.css';

const App = () => {
  
  const exampleRequest = `https://api.edamam.com/search?q=chicken&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_APP_KEY}`

  return (
    <div clasName="App">
      <form className="search-form">
        <input className="search-bar" type="text"/>
        <button className ="search-button" type="submit">Search</button>
      </form>
    </div>
  );
}

export default App;
