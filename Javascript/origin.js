let originURL = "/";
let origin = document.location.origin;

if (origin === "https://monohen.github.io") {
  originURL = "/index/";
} else {
  console.log("Running index locally or on not monohen website at " + origin);
  originURL = "/";
}

document.getElementById("websiteName").setAttribute("href", originURL);
document.getElementById("websiteName").lastChild.innerText = "Monohen";

loadFeaturedGames();
loadEduGames();
loadCasualGames();
loadSandGames();
loadStratGames();
loadSurvGames();

document
  .getElementById("originURL")
  .setAttribute("content", "10; " + originURL);
