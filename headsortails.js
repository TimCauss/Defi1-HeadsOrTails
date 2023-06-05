const button = document.getElementById("button");
const result = document.getElementById("p_result");

button.addEventListener("click", () => {
  pileOuFace();
});

function pileOuFace() {
  let resultText = ["Heads", "Tails"];
  let random = Math.floor(Math.random() * resultText.length);
  console.log(resultText[random]);
  result.innerHTML += resultText[random] + "<br>";
}
