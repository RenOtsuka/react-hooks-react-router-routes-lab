import React from "react";
import { movies } from "../data";

function Movies() {

  function renderGenres(genres){
    const genreList = genres.map(genre => (
        <li key={genre}>{genre}</li>
      )
    );
    return genreList;
  }

  const movieList = movies.map( movie => (
    <div key={movie.title}>
      <h3>Name: {movie.title}</h3>
      Time: {movie.time}
     <br/>
      <p>Genres:</p>
      <ul>
        {renderGenres(movie.genres)}
      </ul>
    </div>
  ));

  return (
  <div>
    <h1>Movies Page</h1>
    {movieList}
  </div>
  );
}

export default Movies;
