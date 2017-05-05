import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar.js';

const API_KEY = "AIzaSyB0pSyh3oMzmVYnQXixotLSCuFk-kjRMZQ";

// Create a new Component. This component should produce some HTML
// This is a functional based component
const App = () => {
  return (
    <div>
      <SearchBar/>
    </div>
  );
}

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App/>, document.querySelector('.container'));
