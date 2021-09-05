import React from 'react';
import { loadList } from './app/actions';
import { useDispatch } from 'react-redux';

import './App.css';

import {Header} from './components/Header'
import Slots from './components/Slots'

function App () {
/*  const dispatch = useDispatch();
  const loadData = function () {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => dispatch(loadList(data))
      );
}*/

  return (
    <div className="App">
      <Header></Header>
      <Slots></Slots>
    </div>
  );
}

export default App;
