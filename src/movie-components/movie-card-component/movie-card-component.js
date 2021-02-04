import React, { Component } from 'react';


function MovieCard (props) {
  return (
    <div className='movie-card'>
      <h1>{props.title}</h1>
      <img src={props.poster_path}/>
      <div>
        <h2>Genre(s)</h2>
        <p>{props.genres.join(' ')}</p>
      </div>
      <div>
        <h2>Rating</h2>
        <p>{props.average_rating.toFixed(2)}</p>
      </div>
    </div>
  )
}

export default MovieCard;