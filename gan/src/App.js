import React, { useEffect } from 'react';
import { loadList, listPage, listPages } from './app/actions';
import { useDispatch } from 'react-redux';

import './App.css';

import Header from './components/Header'
import Slots from './components/Slots'

function App () {


  const apiPath = {
    apiKey: "api_key=b987c4f78646d38a43e391c761addd2f",
    baseUrl: "https://api.themoviedb.org/4",
    moviePath: '/discover/movie?',
    bestMovies: '&certification_country=US&primary_release_year=2010&sort_by=vote_average.desc',
    movieSrc: '/t/p/w440_and_h660_face/' 
  };

  const dispatch = useDispatch();
  const loadListHandler = () => {
      fetch(apiPath.baseUrl + apiPath.moviePath + apiPath.apiKey + apiPath.bestMovies)
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
