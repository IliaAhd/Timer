"use strict";

// Elements
const timerEl = document.querySelector(".timer");
const startButtonEl = document.querySelector(".start");
const stopButtonEl = document.querySelector(".stop");
const resetButtonEl = document.querySelector(".reset");

// Variables
let startTime = 0;
let elapsedTime = 0;
let timerInterval;

// Functions
const startTimer = () => {
  startTime = Date.now() - elapsedTime;

  timerInterval = setInterval(() => {
    elapsedTime = Date.now() - startTime;

    timerEl.textContent = formatTime(elapsedTime);
  }, 10);

  startButtonEl.disabled = true;
  stopButtonEl.disabled = false;
  resetButtonEl.disabled = false;
};

const formatTime = (elapsedTime) => {
  const milisecond = Math.floor((elapsedTime % 1000) / 10);

  const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);

  const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));

  const hours = Math.floor(elapsedTime / (1000 * 60 * 60));

  return `${hours ? (hours > 9 ? hours : "0" + hours) : "00"} : ${
    minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00"
  } 
  : 
  ${seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00"}.${
    milisecond > 9 ? milisecond : "0" + milisecond
  }`;
};

const stopTimer = () => {
  clearInterval(timerInterval);
  startButtonEl.disabled = false;
  stopButtonEl.disabled = true;
  resetButtonEl.disabled = false;
};

const resetTimer = () => {
  clearInterval(timerInterval);
  elapsedTime = 0;

  timerEl.textContent = "00 : 00 : 00";

  startButtonEl.disabled = false;
  stopButtonEl.disabled = true;
  resetButtonEl.disabled = true;
};

// Event handlres
startButtonEl.addEventListener("click", startTimer);
stopButtonEl.addEventListener("click", stopTimer);
resetButtonEl.addEventListener("click", resetTimer);
