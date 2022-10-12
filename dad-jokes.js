let jokesPlace = document.querySelector("#jokes");
async function getJoke() {
  let response = await fetch("https://icanhazdadjoke.com/", {
    headers: { accept: "application/json" },
  });

  let data = await response.json();
  jokesPlace.innerHTML = data.joke;
  return data;
}


async function start() {
  let joke = await getJoke();
}

start()