/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(array) {
    let copy = [...array];
    
    copy.sort((a,b)=>{
      if(a.year < b.year){
        return -1
      }
      else if (b.year < a.year){
        return 1
      }
      else if (a.title < b.title){
        return -1
      }
      else if (b.title < a.title){
        return 1
      }
      else () =>{
        return 0
      }
   })
   return copy
   }
    
   console.log(orderByYear(movies))
   

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(anArray) {
    let sDrama = anArray.filter( (eachMovie) =>{
      return (eachMovie.director == 'Steven Spielberg' && eachMovie.genre.includes ('Drama'))
    })
  
    return sDrama.length
  }

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(anArrayTwo) {

  let alph = [...anArrayTwo];

  let titles = alph.map( (eachTitle) =>{
    return eachTitle.title;
  })

  titles.sort(function (a, b){
    if(a < b){
      return -1;
    }
    else if(b < a){
      return 1;
    }
    else{
      return 0
    }
  })

  return titles.splice(0, 20);
};

console.log(orderAlphabetically(movies))

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(array){

  if(array.length == 0){
    return 0;
  }

  let total = array.reduce( (a, c) =>{
    if(c.rate){
      return a + c.rate;
    }
    else{
      return a + 0;
    }
  }, 0);

  let avgRate = (total / array.length).toFixed(2);
  return Number(avgRate);

}

console.log(ratesAverage(movies))

// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(array){

  let dramaMovies = array.filter( (eachMovie) => {
    return eachMovie.genre.includes("Drama");
  })

  let avgRate = ratesAverage(dramaMovies);

  return avgRate;



}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(array){

  return array.map( (eachMovie) =>{
  
    let duration = eachMovie.duration;
  
    let hour = 0;
    let min = 0;
  
    if(duration.indexOf('h') >= 0 && duration.indexOf('min') >= 0){
      hour = duration.substring(0, duration.indexOf('h'));
      min = duration.substring(duration.indexOf(" ") + 1, duration.indexOf("min"));
      console.log(hour, min)
    }
    else if(duration.indexOf('h') >= 0){
      hour = duration.substring(0, duration.indexOf('h'));
    }
    else if(duration.indexOf('min') >= 0){
      min = duration.substring(0, duration.indexOf("min"))
    }
  
    let formattedTime = Number(hour) * 60 + Number(min);
  
  
  
    return {
      title: eachMovie.title,
      year: eachMovie.year,
      duration: formattedTime,
    }
  
  })
  
  }

// BONUS Iteration: Best yearly rate average - Best yearly rate average
