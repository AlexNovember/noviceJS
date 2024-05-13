const startBtn = document.querySelector("#start");
const screens = document.querySelectorAll(".screen");
const timeList = document.querySelector("#time-list");
const timeEl = document.querySelector("#time");
const board = document.querySelector("#board");
const cursor = document.querySelector(".cursor");
const audio = new Audio("1.mp3");
const audio2 = new Audio("2.mp3");

let time = 0;
let score = 0;

startBtn.addEventListener("click", (event) => {
  event.preventDefault();
  screens[0].classList.add("up");
});

timeList.addEventListener("click", (event) => {
  if (event.target.classList.contains("time-btn")) {
    // console.log(event.target);
    // console.log(event.target.getAttribute("data-time"));
    time = Number.parseInt(event.target.getAttribute("data-time"));
    screens[1].classList.add("up");
    // console.log(time);
    startGame();
  }
});

board.addEventListener("click", (event) => {
  audio.play();
  if (event.target.classList.contains("circle")) {
    score++;
    event.target.remove();
    createRandomCircle();
  }
});

function startGame() {
  setInterval(decreaseTime, 1000);
  createRandomCircle();
  setTime(time);
}

function decreaseTime() {
  if (time === 0) {
    finishGame();
  } else {
    let current = --time;
    if (current < 10) {
      current = `0${current}`;
    }
    setTime(current);
  }
}

function setTime(value) {
  timeEl.innerHTML = `00:${value}`;
}

function finishGame(params) {
  // timeEl.parentNode.remove;
  timeEl.parentNode.classList.add("hide");
  board.innerHTML = `<h1>Cчет: <span class='primary'>${score}</span></h1>`;
  // preventDefault();
//  const finishButton = board.createElement('button');
//  finishButton.setAttribute('type', 'button');
// finishButton.classList.add('btn');
// finishButton.textContent = 'Нажми меня';
// document.body.append(finishButton);
}

function createRandomCircle(params) {
  const circle = document.createElement("div");

  const mouseMove = function (e) {
    let x = e.clientX;
    let y = e.clientY;
    cursor.style.left = x + "px";
    cursor.style.top = y + "px";
  };

  document.addEventListener("mousemove", mouseMove);

  const size = getRandomNumber(10, 60);
  const { width, height } = board.getBoundingClientRect();

  const x = getRandomNumber(0, width - size);
  const y = getRandomNumber(0, height - size);
  const color = getRandomColors();

  circle.classList.add("circle");
  circle.style.width = `${size}px`;
  circle.style.height = `${size}px`;
  circle.style.top = `${y}px`;
  circle.style.left = `${x}px`;
  circle.style.background = `linear-gradient(90deg, ${color} 0%, ${color} 47%, ${color} 100%)`;

  board.append(circle);
}

function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function getRandomColors() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


// function winTheGame(params) {
  
//   function kill(params) {
//     document.querySelector('circle');

//     circle.click();

//     if (circle) {
//       circle.click();
//     }
//   }
//   setInterval(kill, 42);
// }

