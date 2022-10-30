"use strict";

const namberOfFilms = +prompt ("how mane films do you see?", "");

const personalMovieDB = {
    count: namberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for(let i = 0; i < 2; i++) {
  const  moviesOneLastMovie = prompt ("what's the last movie you watched?", "");
  const  moviesOneRate = +prompt ("How much would you rate this movie?", "");

    if (moviesOneLastMovie != null && moviesOneRate != null && moviesOneLastMovie !="" && 
        moviesOneRate !="" && moviesOneLastMovie.length < 50)
    {
        personalMovieDB.movies[moviesOneLastMovie] = moviesOneRate;
        console.log("done");
    } else {
        console.log("erro");
        i--;
    }

}

if(personalMovieDB.count < 10){
    console.log("watched few movies");
    }else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
        console.log("you are a wonderful viewer");
    }else if (personalMovieDB.count >= 30){
        console.log("you are a movie buff");
    }else{
        console.log("Error");
    }


console.log(personalMovieDB);