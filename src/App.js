import './App.scss';
import React from 'react';
import visitedCountries from './countriesVisited.json'
import { FilterableCountriesList } from './components/filterable-countries-list/filterable-countries-list'
import { Clock } from './components/clock/clock';
import { Welcome } from './components/welcome/welcome';
import { ImagesList } from './components/images-list/images-list';

function App() {
  return (
    <div>
      {/* <Welcome /> */}
      {/* <Clock /> */}
      <FilterableCountriesList countries={visitedCountries} />
      <ImagesList />
    </div>
  );
}

export default App;