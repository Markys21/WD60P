const numArr = [];
// ************************************************************************
function createInput() {
let container = document.getElementById("divE");
let numInputs = document.getElementById("numin").value;
container.innerHTML = "";
for (let i = 1; i <= numInputs; i++) {
container.innerHTML += `<input type="number" placeholder="Enter Number ${i}" 
id="input${i}">`;
}
numArr.splice(0);
showAlert2();
}
// ************************************************************************ 
function getTagsInDiv() {
var divElement = document.getElementById("divE"); 
var elements = divElement.getElementsByTagName("input"); 
for (var i = 0; i < elements.length; i++) {
var elementID = parseInt(elements[i].value);
numArr.push(elementID);
}
showAlert();
}
// ************************************************************************ 
function getSum(){
var sum = numArr.reduce((total, num) => total + num, 0);
var targetElement = document.getElementById("output1");
targetElement.textContent = sum;
}
// ************************************************************************ 
function sortdesc(){
numArr.sort((a, b) => b - a);
const separator = " → ";
var targetElement = document.getElementById("output2");
targetElement.textContent = numArr.join(separator);
}
// ************************************************************************ 
function getHighest(){
var greatestNumber = Math.max(...numArr);
var targetElement = document.getElementById("output3");
targetElement.textContent = greatestNumber;
}
// ************************************************************************ 
function getAverage(){
var sum = numArr.reduce((total, num) => total + num, 0);
var average = sum / numArr.length;
var rounded = average.toFixed(2);
var targetElement = document.getElementById("output4");
targetElement.textContent = rounded;
} 
// ************************************************************************ 
function getEvenOdd(){
let outputElement = document.getElementById("output5");
outputElement.innerHTML = numArr.map(number => {
var result = number % 2 === 0 ? "Even" : "Odd";
return `<li>${number} is ${result} number</li>`;
}).join('');
}
// ************************************************************************ 
function getMiddle() {
var result = numArr.slice(1, numArr.length - 1);
const separator = " • ";
var targetElement = document.getElementById("output6");
targetElement.textContent = result.join(separator);
}
// ************************************************************************ 
function makeRandomNum() {
let divElement = document.getElementById("divE");
let elements = divElement.getElementsByTagName("input");
let idArray = Array.from(elements, element => element.id);
idArray.forEach(inputId => {
let inputElement = document.getElementById(inputId);
let randomNumber = Math.floor(Math.random() * 20) + -10;
inputElement.value = randomNumber;
});
}
// ************************************************************************ 
function clearAll(){
numArr.splice(0);
let divElement = document.getElementById("divE");
let elements = divElement.getElementsByTagName("input");
let idArray = Array.from(elements, ({ id }) => id);
idArray.forEach(id => document.getElementById(id).value = "");
let divElement1 = document.getElementById("right");
let elements1 = divElement1.getElementsByTagName("p");
Array.from(elements1).forEach(element => {
element.textContent = "--- empty ---";
});
showAlert1();
} 
// ************************************************************************ 
function getAll(){
getSum();
sortdesc();
getHighest();
getAverage();
getEvenOdd();
getMiddle();
}
function showAlert() {
let alertContainer = document.getElementById("alertContainer");
alertContainer.style.display = "block";
setTimeout(function() {
alertContainer.style.display = "none"; 
}, 2500);
}
function showAlert1() {
let alertContainer = document.getElementById("alertContainer1");
alertContainer.style.display = "block";
setTimeout(function() {
alertContainer.style.display = "none"; 
}, 2500);
} 
function showAlert2() {
let alertContainer = document.getElementById("alertContainer2");
let numInputs = document.getElementById("numin").value;
let inputAlert = document.getElementById("inputAlert");
inputAlert.innerHTML = numInputs + " Inputs Created!";
alertContainer.style.display = "block";
setTimeout(function() {
alertContainer.style.display = "none"; 
}, 2500);
}