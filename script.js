const input = document.getElementById("textAreaId");
const c = document.getElementById("clearId");
const back = document.getElementById("backId");
const divide = document.getElementById("divideId");
const seven = document.getElementById("7");
const eight = document.getElementById("8");
const nine = document.getElementById("9");
const multiply = document.getElementById("multiplyId");
const four = document.getElementById("4");
const five = document.getElementById("5");
const six = document.getElementById("6");
const minus = document.getElementById("minusId");
const one = document.getElementById("1");
const two = document.getElementById("2");
const three = document.getElementById("3");
const plus = document.getElementById("plusId");
const zero = document.getElementById("0");
const equals = document.getElementById("equalsId");

//string which stores whole equasion + helper temporary string
let equasion = "";
let tempString = "";

//helper function to remove any leading zeros from input
const noLeadingZeros = function (inputString) {
  let noZero = inputString.replace(/^0+/, "");
  return noZero;
};

//clear inputbox and calculation strings
c.addEventListener("click", () => {
  input.innerText = "";
  equasion = "";
  tempString = "";
});
back.addEventListener("click", () => {
  equasion = equasion.slice(0, -1);
  input.innerText = equasion;
});

//inputbox number is transfered to temporary string
const allNumberButtons = document.querySelectorAll(".number-button");
allNumberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    tempString = tempString + button.innerText;
    input.innerText = tempString;
    console.log("tempstring: " + tempString);
  });
});

//arithmetics symbols bevahiour
const allArithmetics = document.querySelectorAll(".arithmetic");
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
  console.log(result);
});
