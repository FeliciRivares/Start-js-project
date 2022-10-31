"use strict";

let namberOfFilms;
function start(){
    namberOfFilms = prompt ("how mane films do you see?", "");
    while(namberOfFilms == '' || namberOfFilms == null || isNaN(namberOfFilms)){
        namberOfFilms = prompt ("how mane films do you see?", "");
    }
}
start();

function showMyDB(hidden){
    if(!hidden){
        console.log(personalMovieDB);

    }
}


function writeYourGenres(){
    for(let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt (`your favorite genre under the number ${i} `);
      }
    
}



const personalMovieDB = {
    count: namberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
writeYourGenres();
function rememberMyFilms(){
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
}
rememberMyFilms();

function detectPersonalLevel(){
    if(personalMovieDB.count < 10){
        console.log("watched few movies");
        }else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
            console.log("you are a wonderful viewer");
        }else if (personalMovieDB.count >= 30){
            console.log("you are a movie buff");
        }else{
            console.log("Error");
        }
}

detectPersonalLevel();
showMyDB(personalMovieDB.privat);