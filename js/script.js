"use strict";



const namberOfFilms = +prompt ("how mane films do you see?", ""),

    moviesOneLastMovie = prompt ("what's the last movie you watched?", ""),
    moviesOneRate = +prompt ("How much would you rate this movie?", ""),
    moviesTwoLastMovie = prompt ("what's the last movie you watched?", ""),
    moviesTwoRate = +prompt ("How much would you rate this movie?", "");

const personalMovieDB = {
    count: namberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};
personalMovieDB.movies[moviesOneLastMovie] = moviesOneRate;
personalMovieDB.movies[moviesTwoLastMovie] = moviesTwoRate;

console.log(personalMovieDB);