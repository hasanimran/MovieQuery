var movieList = [
  { title: "Star Wars: Return of the Jedi", year: "1977", length: 125, rating: "1", genre: "sci-fi" },
  { title: "The Matrix Revolutions", year: "2003", length: 129, rating: "2", genre: "sci-fi" },
  { title: "Omen : The Final Conflict", year: "1981", length: 108, rating: "3", genre: "horror" },
  { title: "Gladiator", year: "2000", length: 155, rating: "8.5", genre: "historical" },
  { title: "The Patriot", year: "2000", length: 165, rating: "7.1", genre: "historical" },
  { title: "The Matrix Reloaded”, year: “2003", length: 138, rating: "7.2", genre: "sci-fi" }
];

function getMovieTitle( index ){
  //add code
return movieList[index].title;
}

console.log(getMovieTitle(3));

function addMovie( movie ){
  //add code

  movieList.push(movie);

  return JSON.stringify( movieList);
}

var newMovie = {title: "iBoy”, year: “2003", length: 138, rating: "7.2", genre: "sci-fi"};
console.log(addMovie(newMovie));

function movieByRating(){
  //add code
  movieList.sort(function(a, b){return b.rating - a.rating});
  return JSON.stringify( movieList);

}

console.log(movieByRating());

function findByTitle( title ){
  //add code
  document.getElementById("demo").innerHTML = movieList.title;
  return movieList.title;
}
function findByTitle( title ){
  var found = [];
     var f = 0;
  for (var i = 0; i < movieList.length; i++){
          if (movieList[i].title.search(title) != -1){
               found[f] = movieList[i];
               f++;
      }
    }
    return JSON.stringify(found);
}

console.log(findByTitle("Matrix"));
