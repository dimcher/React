import React from 'react';
import './App.css';

import {Header} from './components/Header'
import {Slots} from './components/Slots'

function App () {
  return (
    <div className="App">
      <Header></Header>
      <Slots></Slots>
    </div>
  );
}

export default App;
