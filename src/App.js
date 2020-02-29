// this is the parent component

import React, { Component } from 'react';
import './App.css';
import Searchbar from './Components/Searchbar/searchbar';
import SearchResults from './Components/SearchResults/searchResults';
import SearchHistory from './Components/SearchHistory/searchHistory';


class App extends Component {
  render(){
    return (
      <div className='App'>
        <Searchbar/>
        <div className='container text-center'>
          <div className='row'>
              <div className='col'>
                <SearchHistory/>
              </div>
              <div className='col'>
                <SearchResults/>
              </div>
          </div>
        </div>
      </div>
    );
  }
} 

export default App;