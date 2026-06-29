const pages = Array.from(document.querySelectorAll(".page"));
const progress = document.getElementById("progress");
let current = 0;
let touchStartY = 0;
let locked = false;

pages.forEach((_, index) => {
  const dot = document.createElement("span");
  if (index === 0) dot.classList.add("active");
  progress.appendChild(dot);
});

function showPage(index) {
  const nextIndex = Math.max(0, Math.min(pages.length - 1, index));
  if (nextIndex === current || locked) return;
  locked = true;
  pages[current].classList.remove("active");
  current = nextIndex;
  pages[current].classList.add("active");
  Array.from(progress.children).forEach((dot, i) => dot.classList.toggle("active", i === current));
  setTimeout(() => { locked = false; }, 560);

  if (pages[current].dataset.theme === "puzzle") {
    setTimeout(() => document.getElementById("puzzleBoard").classList.add("solved"), 450);
  }
}

document.querySelectorAll(".next").forEach((button) => {
  button.addEventListener("click", () => showPage(current + 1));
});

document.getElementById("restart").addEventListener("click", () => showPage(0));

window.addEventListener("keydown", (event) => {
  if (event.key === "ArrowDown" || event.key === "PageDown") showPage(current + 1);
  if (event.key === "ArrowUp" || event.key === "PageUp") showPage(current - 1);
});

document.addEventListener("touchstart", (event) => {
  touchStartY = event.touches[0].clientY;
}, { passive: true });

document.addEventListener("touchend", (event) => {
  const delta = event.changedTouches[0].clientY - touchStartY;
  if (Math.abs(delta) < 48) return;
  showPage(delta < 0 ? current + 1 : current - 1);
}, { passive: true });

document.getElementById("shuffleSolar").addEventListener("click", (event) => {
  document.getElementById("solarOrbit").classList.toggle("shuffled");
  makeSpark(event.clientX, event.clientY);
});

document.getElementById("playPuzzle").addEventListener("click", (event) => {
  const board = document.getElementById("puzzleBoard");
  board.classList.remove("solved");
  window.setTimeout(() => board.classList.add("solved"), 80);
  makeConfetti(18);
  makeSpark(event.clientX, event.clientY);
});

document.querySelectorAll(".spark-btn").forEach((button) => {
  button.addEventListener("click", (event) => {
    makeConfetti(26);
    makeSpark(event.clientX, event.clientY);
  });
});

document.querySelectorAll(".venue-card").forEach((card) => {
  card.addEventListener("click", () => {
    document.querySelectorAll(".venue-card").forEach((item) => item.classList.remove("active"));
    card.classList.add("active");
    document.getElementById("venueCaption").textContent = card.dataset.caption;
  });
});

document.querySelectorAll("#quizBox button").forEach((button) => {
  button.addEventListener("click", () => {
    const correct = button.dataset.answer === "right";
    document.querySelectorAll("#quizBox button").forEach((item) => {
      item.classList.remove("correct", "wrong");
    });
    button.classList.add(correct ? "correct" : "wrong");
    document.getElementById("quizResult").textContent = correct
      ? "答对啦！二十四节气把中国人的时间感写进了冬奥开幕式。"
      : "再想想：那是一组和春夏秋冬有关的中国时间密码。";
    if (correct) makeConfetti(30);
  });
});

function makeSpark(x, y) {
  const spark = document.createElement("span");
  spark.className = "spark";
  spark.style.left = `${x - 5}px`;
  spark.style.top = `${y - 5}px`;
  document.body.appendChild(spark);
  spark.addEventListener("animationend", () => spark.remove());
}

function makeConfetti(amount) {
  const colors = ["#ee4a5a", "#23a8e5", "#8de6cf", "#ffd36b", "#ffffff"];
  for (let i = 0; i < amount; i += 1) {
    const piece = document.createElement("span");
    piece.className = "confetti";
    piece.style.left = `${Math.random() * 100}vw`;
    piece.style.background = colors[i % colors.length];
    piece.style.animationDelay = `${Math.random() * 260}ms`;
    piece.style.animationDuration = `${900 + Math.random() * 700}ms`;
    document.body.appendChild(piece);
    piece.addEventListener("animationend", () => piece.remove());
  }
}

const canvas = document.getElementById("snowCanvas");
const ctx = canvas.getContext("2d");
let flakes = [];

function resizeCanvas() {
  canvas.width = window.innerWidth * window.devicePixelRatio;
  canvas.height = window.innerHeight * window.devicePixelRatio;
  ctx.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);
  flakes = Array.from({ length: 46 }, () => ({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    r: 1.4 + Math.random() * 3.8,
    s: 0.45 + Math.random() * 1.2,
    drift: Math.random() * 0.8 - 0.4
  }));
}

function drawSnow() {
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  ctx.fillStyle = "rgba(255, 255, 255, 0.88)";
  flakes.forEach((flake) => {
    ctx.beginPath();
    ctx.arc(flake.x, flake.y, flake.r, 0, Math.PI * 2);
    ctx.fill();
    flake.y += flake.s;
    flake.x += flake.drift + Math.sin(flake.y / 35) * 0.25;
    if (flake.y > window.innerHeight + 8) {
      flake.y = -8;
      flake.x = Math.random() * window.innerWidth;
    }
  });
  requestAnimationFrame(drawSnow);
}

resizeCanvas();
drawSnow();
window.addEventListener("resize", resizeCanvas);


// 新增两页互动：点亮火炬、生成纪念卡
const lightTorchButton = document.getElementById("lightTorch");
if (lightTorchButton) {
  lightTorchButton.addEventListener("click", (event) => {
    const stage = document.getElementById("torchStage");
    stage.classList.add("lit");
    document.getElementById("torchResult").textContent = "火炬已点亮！愿热爱在冰雪中继续发光。";
    makeConfetti(36);
    makeSpark(event.clientX, event.clientY);
  });
}

document.querySelectorAll(".card-options button").forEach((button) => {
  button.addEventListener("click", (event) => {
    document.querySelectorAll(".card-options button").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    document.querySelector(".wish-card-tag").textContent = button.dataset.card;
    document.getElementById("wishCardText").textContent = button.dataset.text;
    makeSpark(event.clientX, event.clientY);
  });
});
