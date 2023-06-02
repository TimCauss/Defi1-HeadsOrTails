const button = document.getElementsByClassName("button");
const result = document.getElementsByClassName("p-result");

button[0].addEventListener("click", () => {
  pileOuFace();
});

function pileOuFace() {
  let resultText = ["Heads", "Tails"];
  let random = Math.floor(Math.random() * resultText.length);
  console.log(resultText[random]);
  result[0].innerHTML += resultText[random] + "<br>";
}
