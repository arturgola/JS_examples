"use script";

let result = document.querySelector(".result")
let number = []

for(let i = 0; i < 5; i++)
{
    number[i] = parseInt(prompt("Type number: " + (i + 1)));
}
for(let i = 0; i < 5; i++)
{
    console.log(number[4 - i]);
}