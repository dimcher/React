import React, { useEffect } from 'react';
import { loadList, listPage, listPages } from './app/actions';
import { useDispatch, useSelector } from 'react-redux';

import './App.css';

import Header from './components/Header'
import Slots from './components/Slots'

function App () {
  const apiKey = useSelector(state => state.list.apiKey);
  const baseUrl = useSelector(state => state.list.baseUrl);
  const moviePath = useSelector(state => state.list.moviePath);
  const bestMovies = useSelector(state => state.list.bestMovies);
  console.log(apiKey);

  const dispatch = useDispatch();
  const loadListHandler = () => {
      fetch(baseUrl + moviePath + apiKey + bestMovies)
        .then(res => res.json())
        .then(data => {
          dispatch(loadList(data.results));
          dispatch(listPage(data.page));
          dispatch(listPages(data.pages));
        })
  };
  
  useEffect(() => {
    loadListHandler();
  });

  return (
    <div className="App">
      <Header></Header>
      <Slots></Slots>
    </div>
  );
}

export default App;
