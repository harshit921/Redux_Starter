import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
const API_KEY = 'AIzaSyBOSmKNexx-kHG4fVLKXG33e5WfLyeriPc';

const App = () => {
  return(
    <div>
    <SearchBar></SearchBar>
  </div>
  );
};

ReactDOM.render(<App />, document.querySelector('.container'));
