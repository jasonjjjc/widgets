window.onload = getTrivia;
let triviaPlace = document.querySelector("#trivia");
let answerSpace = document.querySelector("#answerSpace");
let answerButton = document.querySelector("#answer");

async function getTrivia() {
  let responseTr = await fetch("https://opentdb.com/api.php?amount=1");
  let dataTr = await responseTr.json();
  let question = dataTr.results[0].question;
  let answer = dataTr.results[0].correct_answer;
  triviaPlace.innerHTML = question;
  answerSpace.innerHTML = answer;
}

function showAnswer() {
  answerSpace.style.visibility = "visible";
}
answerButton.addEventListener("click", showAnswer);
