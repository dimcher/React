import React from 'react';
import { loadCatalog } from './app/actions';
import { useDispatch } from 'react-redux';

import './App.css';

import {Header} from './components/Header'
import Slots from './components/Slots'

function App () {
  const dispatch = useDispatch();

  return (
    <div className="App">
      <Header></Header>
      <Slots></Slots>
    </div>
  );
}

export default App;
