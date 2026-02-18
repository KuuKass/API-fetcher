async function getData() {
  const response = await fetch('https://official-joke-api.appspot.com/random_joke');
  const data = await response.json();
  document.querySelector('#jokeText').textContent =
    data.setup + " " + data.punchline;
  console.log(data);
};
const jokeButton = document.querySelector('#jokeBtn');
jokeButton.addEventListener('click', getData);

