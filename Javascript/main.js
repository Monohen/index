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
  "Physics",
  "Pong",
  "Snake",
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
  "Physics",
  "Pong",
  "Snake",
  "Super Mario Bros.",
  "Tetris",
];

let edus = [];

let sands = ["CubeWorld", "Physics"];

let stats = [];

let survs = [];

let featuredGames = document.getElementById("featuredGames");
let casualGames = document.getElementById("casualGames");
let eduGames = document.getElementById("eduGames");
let sandGames = document.getElementById("sandGames");
let stratGames = document.getElementById("stratGames");
let survGames = document.getElementById("survGames");

let githubURL = "https://raw.githubusercontent.com/Monohen/index";

games.sort();

function loadFeaturedGames() {
  games.forEach(function (e) {
    let game = document.createElement("a");
    let gameFile = e.split(" ").join("");
    let gameTitleURL = originURL.concat(gameFile.concat("/"));
    let gameTitlePictureURL =
      "url(" + githubURL + "/main/images/" + gameFile + ".png)";
    console.log(gameTitlePictureURL);
    game.setAttribute("href", gameTitleURL);
    game.innerText = e;
    featuredGames.append(game);
  });
}

function loadCasualGames() {
  casuals.forEach(function (e) {
    let game = document.createElement("a");
    let gameFile = e.split(" ").join("");
    let gameTitleURL = originURL.concat(gameFile.concat("/"));
    let gameTitlePictureURL =
      "url(" + githubURL + "/main/images/" + gameFile + ".png)";
    game.style.backgroundImage = gameTitlePictureURL;
    game.setAttribute("href", gameTitleURL);
    game.innerText = e;
    casualGames.append(game);
  });
}

function loadEduGames() {
  edus.forEach(function (e) {
    let game = document.createElement("a");
    let gameFile = e.split(" ").join("");
    let gameTitleURL = originURL.concat(gameFile.concat("/"));
    let gameTitlePictureURL =
      "url(" + githubURL + "/main/images/" + gameFile + ".png)";
    game.style.backgroundImage = gameTitlePictureURL;
    game.setAttribute("href", gameTitleURL);
    game.innerText = e;
    eduGames.append(game);
  });
}

function loadSandGames() {
  sands.forEach(function (e) {
    let game = document.createElement("a");
    let gameFile = e.split(" ").join("");
    let gameTitleURL = originURL.concat(gameFile.concat("/"));
    let gameTitlePictureURL =
      "url(" + githubURL + "/main/images/" + gameFile + ".png)";
    game.style.backgroundImage = gameTitlePictureURL;
    game.setAttribute("href", gameTitleURL);
    game.innerText = e;
    sandGames.append(game);
  });
}

function loadStratGames() {
  stats.forEach(function (e) {
    let game = document.createElement("a");
    let gameFile = e.split(" ").join("");
    let gameTitleURL = originURL.concat(gameFile.concat("/"));
    let gameTitlePictureURL =
      "url(" + githubURL + "/main/images/" + gameFile + ".png)";
    game.style.backgroundImage = gameTitlePictureURL;
    game.setAttribute("href", gameTitleURL);
    game.innerText = e;
    stratGames.append(game);
  });
}

function loadSurvGames() {
  survs.forEach(function (e) {
    let game = document.createElement("a");
    let gameFile = e.split(" ").join("");
    let gameTitleURL = originURL.concat(gameFile.concat("/"));
    let gameTitlePictureURL =
      "url(" + githubURL + "/main/images/" + gameFile + ".png)";
    game.style.backgroundImage = gameTitlePictureURL;
    game.setAttribute("href", gameTitleURL);
    game.innerText = e;
    survGames.append(game);
  });
}
