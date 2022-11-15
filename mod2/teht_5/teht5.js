"use script";

let result = document.querySelector(".result")
let numbers = [];

let number = 1;
while (number != 0)
{
    number = Number(prompt("Enter a number"));
    if (numbers.includes(number))
    {
        alert("Number already given");
        break;
    }
    numbers.push(number);
}

let sortedList = numbers.sort(function (a,b){return a-b});
{
    console.log(sortedList);
}

