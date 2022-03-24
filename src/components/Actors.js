import React from "react";
import { actors } from "../data";

function Actors() {

  function renderActorMovies(movies){
   const actorMovieList = movies.map(movie => (
     <li key={movie}>{movie}</li>
   ));

   return actorMovieList;
  }

  const actorList = actors.map(actor => (
    <div key={actor.name}>
      <h3>Name: {actor.name}</h3>
      Movies:
      <ul>
        {renderActorMovies(actor.movies)}
      </ul>
    </div>
  ));

  return (
  <div>
    <h1>Actors Page</h1>
    {actorList}
  </div>
    );
}

export default Actors;
