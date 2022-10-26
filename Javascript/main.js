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

let featuredGames = document.getElementById("featuredGames");
let casualGames = document.getElementById("casualGames");
let eduGames = document.getElementById("eduGames");
let sandGames = document.getElementById("sandGames");
let stratGames = document.getElementById("stratGames");
let survGames = document.getElementById("survGames");
let originURL = "/";
let origin = document.location.origin;
if (origin == "https://monohen.github.io/") {
  let originURL = "/";
} else {
  console.warn("Running index locally or on not monohen website at " + origin);
  let originURL = "/index/";
}

console.log(originURL);

document.getElementById("websiteName").setAttribute("href", originURL);
document.getElementById("websiteName").lastChild.innerText = "Monohen";

games.sort();

function loadFeaturedGames() {
  games.forEach(function (e) {
    let game = document.createElement("a");
    let gameTitleURL = originURL.concat(e.split(" ").join("").concat("/"));
    game.setAttribute("href", gameTitleURL);
    game.innerText = e;
    featuredGames.append(game);
  });
}

function loadCasualGames() {
  casuals.forEach(function (e) {
    let casual = document.createElement("a");
    let gameTitleURL = originURL.concat(e.split(" ").join("").concat("/"));
    casual.setAttribute("href", gameTitleURL);
    casual.innerText = e;
    casualGames.append(casual);
  });
}

function loadEduGames() {
  edus.forEach(function (e) {
    let edu = document.createElement("a");
    let gameTitleURL = originURL.concat(e.split(" ").join("").concat("/"));
    edu.setAttribute("href", gameTitleURL);
    edu.innerText = e;
    eduGames.append(edu);
  });
}

function loadSandGames() {
  sands.forEach(function (e) {
    let sand = document.createElement("a");
    let gameTitleURL = originURL.concat(e.split(" ").join("").concat("/"));
    sand.setAttribute("href", gameTitleURL);
    sand.innerText = e;
    sandGames.append(sand);
  });
}
function loadStratGames() {
  stats.forEach(function (e) {
    let stat = document.createElement("a");
    let gameTitleURL = originURL.concat(e.split(" ").join("").concat("/"));
    stat.setAttribute("href", gameTitleURL);
    stat.innerText = e;
    stratGames.append(stat);
  });
}
function loadSurvGames() {
  survs.forEach(function (e) {
    let surv = document.createElement("a");
    let gameTitleURL = originURL.concat(e.split(" ").join("").concat("/"));
    surv.setAttribute("href", gameTitleURL);
    surv.innerText = e;
    survGames.append(surv);
  });
}

loadFeaturedGames();
loadEduGames();
loadCasualGames();
loadSandGames();
loadStratGames();
loadSurvGames();

document
  .getElementById("originURL")
  .setAttribute("content", "10; " + originURL);
