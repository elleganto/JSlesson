"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже просмотрели?", "");

const personalMoviesDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const a = prompt("Один из проследних простмотренных фильмов", ""),
  b = prompt("На сколько оцените его", ""),
  c = prompt("Один из проследних простмотренных фильмов", ""),
  d = prompt("На сколько оцените его", "");

personalMoviesDB.movies[a] = b;
personalMoviesDB.movies[c] = d;

console.log(personalMoviesDB);
