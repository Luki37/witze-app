import { renderSavedList } from "./renderJoke";

let savedJokeList = [];
let newSavedJokeList = JSON.parse(localStorage.getItem("savedJokeList"));

document.getElementById("saveJoke").addEventListener("click", saveJoke);

function saveListToLocalstorage() {
  localStorage.setItem("savedJokeList", JSON.stringify(savedJokeList));
}

function saveJoke() {
  if (newSavedJokeList !== null) {
    savedJokeList = newSavedJokeList;
  }
  const currentJoke = document.getElementById("random-joke");
  const savedJoke = currentJoke.innerText;

  savedJokeList.push(savedJoke);

  saveListToLocalstorage();

  renderSavedList();
}
