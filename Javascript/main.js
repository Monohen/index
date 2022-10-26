// JavaScript Document
let games = [
  "Asteroids",
  "Bomberman",
  "Brick Breaker",
  "Centipede",
  "CubeWorld",
  "Dino Game",
  "Flappy Bird",
  "Frogger",
  "Fruit Ninja",
  "Minesweeper",
  "PAC-MAN",
  "Pong",
  "Snake",
  "Space Invaders",
  "Super Mario Bros.",
  "Tetris",
];

let casuals = [
  "Asteroids",
  "Bomberman",
  "Brick Breaker",
  "Centipede",
  "CubeWorld",
  "Dino Game",
  "Flappy Bird",
  "Frogger",
  "Fruit Ninja",
  "Minesweeper",
  "PAC-MAN",
  "Pong",
  "Snake",
  "Space Invaders",
  "Super Mario Bros.",
  "Tetris",
];

let edus = [];

let sands = ["CubeWorld"];

let stats = [];

let survs = [];

games.sort();

let featuredGames = document.getElementById("featuredGames");
let casualGames = document.getElementById("casualGames");
let eduGames = document.getElementById("eduGames");
let sandGames = document.getElementById("sandGames");
let stratGames = document.getElementById("stratGames");
let survGames = document.getElementById("survGames");

function loadFeaturedGames() {
  games.forEach(function (e) {
    let game = document.createElement("a");
    let gameTitleURL = "/".concat(e.split(" ").join("").concat("/"));
    game.setAttribute("href", gameTitleURL);
    game.innerText = e;
    featuredGames.append(game);
    console.log(game);
  });
}

function loadCasualGames() {
  casuals.forEach(function (e) {
    let casual = document.createElement("a");
    let gameTitleURL = "/".concat(e.split(" ").join("").concat("/"));
    casual.setAttribute("href", gameTitleURL);
    casual.innerText = e;
    casualGames.append(casual);
    console.log(casual);
  });
}

function loadEduGames() {
  edus.forEach(function (e) {
    let edu = document.createElement("a");
    let gameTitleURL = "/".concat(e.split(" ").join("").concat("/"));
    edu.setAttribute("href", gameTitleURL);
    edu.innerText = e;
    eduGames.append(edu);
    console.log(edu);
  });
}

function loadSandGames() {
  sands.forEach(function (e) {
    let sand = document.createElement("a");
    let gameTitleURL = "/".concat(e.split(" ").join("").concat("/"));
    sand.setAttribute("href", gameTitleURL);
    sand.innerText = e;
    sandGames.append(sand);
    console.log(sand);
  });
}
function loadStratGames() {
  stats.forEach(function (e) {
    let stat = document.createElement("a");
    let gameTitleURL = "/".concat(e.split(" ").join("").concat("/"));
    stat.setAttribute("href", gameTitleURL);
    stat.innerText = e;
    stratGames.append(stat);
    console.log(stat);
  });
}
function loadSurvGames() {
  survs.forEach(function (e) {
    let surv = document.createElement("a");
    let gameTitleURL = "/".concat(e.split(" ").join("").concat("/"));
    surv.setAttribute("href", gameTitleURL);
    surv.innerText = e;
    survGames.append(surv);
    console.log(surv);
  });
}

loadFeaturedGames();
loadEduGames();
loadCasualGames();
loadSandGames();
loadStratGames();
loadSurvGames();
