"use script";

let result = document.querySelector(".result")
let numbers = []

let number = 1;
while (number != 0)
{
    number = Number(prompt("Enter a number"));
    numbers.push(number);
}

let sortedNumbers = numbers.sort()
let reverseSortedNumbers = sortedNumbers.reverse()

for (let i = 0; i < numbers.length; i++)
{
    console.log(reverseSortedNumbers[i]);
}