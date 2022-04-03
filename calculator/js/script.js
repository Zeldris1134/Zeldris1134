const number1 = document.getElementById("fnumber");
const number2 = document.getElementById("snumber");
const answer = document.getElementById("answer");
const additionBtn = document.querySelector(".plus");
const subtractionBtn = document.querySelector(".minus");
const multiplyBtn = document.querySelector(".multiply");
const divideBtn = document.querySelector(".divide");
const modusBtn = document.querySelector(".modus");
const clearBtn = document.querySelector(".clear");
const closeBtn = document.querySelector(".close");

const addition = function () {
  let sum = ~~number1.value + ~~number2.value;
  answer.innerText = sum.toFixed(2);
};

const subtraction = function () {
  let sum = ~~number1.value - ~~number2.value;
  answer.innerText = sum.toFixed(2);
};

const multiply = function () {
  let sum = ~~number1.value * ~~number2.value;
  answer.innerText = sum.toFixed(2);
};

const divide = function () {
  let sum = ~~number1.value / ~~number2.value;
  answer.innerText = sum.toFixed(2);
};

const remainder = function () {
  let sum = ~~number1.value % ~~number2.value;
  answer.innerText = sum.toFixed(2);
};

const clear = function () {
  number1.value = 0;
  number2.value = 0;
  answer.innerText = 0;
};

const close = function () {
  document.querySelector(".close").classList.add("hidden");
  document.querySelector(".calc").classList.add("hidden");
  document.querySelector(".button-wrap").classList.add("hidden");
  document.querySelector(".answer-container").classList.add("hidden");
  document.querySelector(".closed").classList.remove("hidden");
};

additionBtn.addEventListener("click", addition);
subtractionBtn.addEventListener("click", subtraction);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
modusBtn.addEventListener("click", remainder);
clearBtn.addEventListener("click", clear);
closeBtn.addEventListener("click", close);
