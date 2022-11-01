"use strict";


const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function(){
        personalMovieDB.count = prompt ("how mane films do you see?", "").trim();
        while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
            personalMovieDB.count = prompt ("how mane films do you see?", "");
        }
    },
    rememberMyFilms: function(){
        for(let i = 0; i < 2; i++) {
            const  moviesOneLastMovie = prompt ("what's the last movie you watched?", "").trim();
            const  moviesOneRate = +prompt ("How much would you rate this movie?", "").trim();
          
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
    },
    detectPersonalLevel: function(){
        if(personalMovieDB.count < 10){
            console.log("watched few movies");
            }else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
                console.log("you are a wonderful viewer");
            }else if (personalMovieDB.count >= 30){
                console.log("you are a movie buff");
            }else{
                console.log("Error");
            }
    },
    showMyDB: function(hidden){
        if(!hidden){
            console.log(personalMovieDB);
    
        }
    },

    toggleVisibleMyDB: function(){
        if (personalMovieDB.privat){
            personalMovieDB.privat = false;
        }else{
            personalMovieDB.privat =  true;
        }
    },


    writeYourGenres: function(){
        for(let i = 1; i <= 3; i++) {
            let genre = prompt (`your favorite genre under the number ${i} `).trim();
            if(genre == '' || genre == null){
                console.log("you entered incorrect data or did not enter it at all");
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }
            
          }
        personalMovieDB.genres.forEach((item, i) =>{
            console.log(`love genres ${i + 1} this a ${item}`);
        } );
    }
};

