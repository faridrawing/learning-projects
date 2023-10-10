const scoreLeft = document.querySelector(".score-left");
const scoreRight = document.querySelector(".score-right");

scoreLeft.querySelector("span p").addEventListener("click", () => {
  const name = prompt("Enter your name : ");
  scoreLeft.querySelector("span h1").textContent = name == "" || name == null ? "(Team Name)" : name;
});

scoreLeft.querySelector("span button.plus").addEventListener("click", () => {
  let score = parseInt(scoreLeft.querySelector("span.number").textContent);
  score++;
  scoreLeft.querySelector("span.number").textContent = score;
});

scoreLeft.querySelector("span button.minus").addEventListener("click", () => {
  let score = parseInt(scoreLeft.querySelector("span.number").textContent);
  score = score == 0 ? (score -= 0) : (score -= 1);
  scoreLeft.querySelector("span.number").textContent = score;
});

scoreRight.querySelector("span p").addEventListener("click", () => {
  const name = prompt("Enter your name : ");
  scoreRight.querySelector("span h1").textContent = name == "" || name == null ? "(Team Name)" : name;
});

scoreRight.querySelector("span button.plus").addEventListener("click", () => {
  let score = parseInt(scoreRight.querySelector("span.number").textContent);
  score++;
  scoreRight.querySelector("span.number").textContent = score;
});

scoreRight.querySelector("span button.minus").addEventListener("click", () => {
  let score = parseInt(scoreRight.querySelector("span.number").textContent);
  score = score == 0 ? (score -= 0) : (score -= 1);
    scoreRight.querySelector("span.number").textContent = score;
});
