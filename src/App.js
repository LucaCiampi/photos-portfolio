import './App.scss';
import React from 'react';
import visitedCountries from './countriesVisited.json'
import { FilterableCountriesList } from './components/filterable-countries-list'
import { Clock } from './components/clock';
import { Welcome } from './components/welcome';
import { ImagesList } from './components/images-list';
import { withRouter } from 'react-router-dom';

class App extends React.Component {
  
  render() {
    return (
      <div>
        {/* <Welcome /> */}
        {/* <Clock /> */}
        <FilterableCountriesList countries={visitedCountries} />
        <ImagesList />
      </div>
    );
  }
}

export default App;