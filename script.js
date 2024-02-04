//create all necessary variables
const input = document.getElementById("textAreaId");
const clear = document.getElementById("clearId");
const backArrow = document.getElementById("backId");
const equals = document.getElementById("equalsId");
const allNumberButtons = document.querySelectorAll(".number-button");
const allArithmetics = document.querySelectorAll(".arithmetic");

//string which stores whole equasion + helper temporary string
let equasion = "";
let tempString = "";

//helper function to remove any leading zeros from input
const noLeadingZeros = function (inputString) {
  let noZero = inputString.replace(/^0+/, "");
  return noZero;
};

//clear inputbox and calculation strings
clear.addEventListener("click", () => {
  input.innerText = "";
  equasion = "";
  tempString = "";
});
backArrow.addEventListener("click", () => {
  equasion = equasion.slice(0, -1);
  input.innerText = equasion;
});

//inputbox number is transfered to temporary string
allNumberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    tempString = tempString + button.innerText;
    input.innerText = tempString;
  });
});

//arithmetics symbols bevahiour
allArithmetics.forEach((symbol) => {
  symbol.addEventListener("click", () => {
    equasion += noLeadingZeros(tempString) + symbol.innerText;
    input.innerText = "";
    tempString = "";
  });
});

equals.addEventListener("click", () => {
  equasion += noLeadingZeros(tempString);
  let result = eval(equasion);
  input.innerText = result;
  tempString = "";
  equasion = "";
});
