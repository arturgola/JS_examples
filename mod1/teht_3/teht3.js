const first = parseInt(prompt("first number: "))
const second = parseInt(prompt("second number: "))
const third = parseInt(prompt("Third number: "))

const sum = first + second + third;
const multiply = first + second + third;
const average = sum/3;

document.querySelector('#target').innerHTML = "The sum is: " + sum + "Multiply is: " + multiply +
"Average is: " + average;

