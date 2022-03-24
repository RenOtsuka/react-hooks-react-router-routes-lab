import React from "react";
import { directors } from "../data";

function Directors() {

  function renderDirectorMovies(movies){
    const directorMovieList = movies.map( movie => (
      <li key={movie}>{movie}</li>
    ));

    return directorMovieList;
  }

  const directorList = directors.map( director => (
    <div key={director.name}>
      <h3>Name: {director.name}</h3>
      Movies:
      <ul>
        {renderDirectorMovies(director.movies)}
      </ul>
    </div>
  ));


  return (
  <div>
    <h1>Directors Page</h1>
    {directorList}
  </div>);
}

export default Directors;
