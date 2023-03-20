let originURL = "/";
let origin = document.location.origin;

if (origin === "https://monohen.github.io") {
  originURL = "/index/";
  document
    .getElementById("originURL")
    .setAttribute("content", "10; " + originURL);
  document.getElementById("websiteName").setAttribute("href", originURL);
  document.getElementById("websiteName").lastChild.innerText = "Monohen";
  console.log("opened from github monohen.github.io");
} else {
  console.log("opened from local");
}

loadFeaturedGames();
loadEduGames();
loadCasualGames();
loadSandGames();
loadStratGames();
loadSurvGames();
