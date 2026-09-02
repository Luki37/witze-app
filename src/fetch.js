import { renderJoke } from "./renderJoke.js";

let randomJoke = document.getElementById("random-joke");

document.getElementById("getJoke").addEventListener("click", getJoke);

export async function getJoke() {
  const getResponse = await fetch("https://witzapi.de/api/joke/");
  const getBody = await getResponse.json();

  renderJoke(getBody);
}
