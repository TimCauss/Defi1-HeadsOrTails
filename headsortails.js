const button = document.getElementById("button");
const result = document.getElementById("p_result");
const stats = document.getElementById("stats");
const pourc = document.getElementById("pourcentages");

let y = 0;
let x = 0;

button.addEventListener("click", () => {
  pileOuFace();
});

function pileOuFace() {
  let resultText = ["Heads", "Tails"];
  let random = Math.floor(Math.random() * resultText.length);
  random == 0 ? x++ : y++;
  result.innerHTML += resultText[random] + " ";
  stat(x, y);
}

function stat(headsTotal, tailsTotal) {
  stats.innerHTML = "Heads: " + headsTotal + " / " + "Tails:  " + tailsTotal;
  let pourcHeads = ((headsTotal / (headsTotal + tailsTotal)) * 100).toFixed(2);
  let pourcTails = ((tailsTotal / (headsTotal + tailsTotal)) * 100).toFixed(2);
  pourc.innerHTML =
    "Heads: " + pourcHeads + "% / " + "Tails: " + pourcTails + "%";
}
