"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже просмотрели?", "");

const personalMoviesDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

for (let i = 0; i < 2; i++) {
  const a = prompt("Один из проследних простмотренных фильмов", ""),
    b = prompt("На сколько оцените его", "");

  if (a != null && b != null && (a != "") & (b != "") && a.length < 50) {
    personalMoviesDB.movies[a] = b;
    console.log("done");
  } else {
    console.log("error");
    i--;
  }
}
console.log(personalMoviesDB);

if (personalMoviesDB.count < 10) {
  console.log("Просмотрено довольно мало фильмов");
} else if (personalMoviesDB.count >= 10 && personalMoviesDB.count3563 <= 30) {
  console.log("Вы классический зритель");
} else if (personalMoviesDB.count >= 30) {
  console.log("Вы киноман");
} else {
  console.log("Произовшла ошибка");
}
