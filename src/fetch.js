import { renderJoke } from "./renderJoke.js";

let randomJoke = document.getElementById("random-joke");
const saveBtn = document.querySelector(".current-joke__save");

document.getElementById("getJoke").addEventListener("click", getJoke);

export async function getJoke() {
  const getResponse = await fetch("https://witzapi.de/api/joke/");
  const getBody = await getResponse.json();

  renderJoke(getBody);
  saveBtn.classList.remove("current-joke__save--disabled");
}
