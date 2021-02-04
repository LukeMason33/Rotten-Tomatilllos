import React, { Component } from 'react';
import './App.css';
import movieData from './data.js';
import MovieContainer from './movie-components/movie-container-component/movie-container.js';
import Header from './header-components/header-bar-component.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: movieData.movies,
      singleMovieView: false
    }
  }

  render () {
    return (
      <main className="main-dashboard">
        <Header />
        <h1>Here</h1>
        <section className="movie-container">
          < MovieContainer movies={this.state.movies} />
        </section>
      </main>
    )
  }
}

export default App;
