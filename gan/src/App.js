import React, { useEffect } from 'react';
import { loadList, appendList } from './app/actions';
import { fetchJson } from './app/library';
import { useDispatch, useSelector } from 'react-redux';

import './App.css';

import Header from './components/Header'
import Slots from './components/Slots'

function App () {
  const dispatch = useDispatch();
  
  const url = useSelector(state => state.list.apiBase + state.list.moviePath + state.list.apiKey + state.list.bestMovies + state.list.showPage);

  const load = (data) => { dispatch(loadList(data)) };
  const append = (data) => { dispatch(appendList(data)) };
  
  useEffect(() => {
    fetchJson(url, load);
    for (let i=2; i<50; i++) {
      fetchJson(url + i, append);
    }
  });

  return (
    <div className="App">
      <Header></Header>
      <Slots></Slots>
    </div>
  );
}

export default App;
