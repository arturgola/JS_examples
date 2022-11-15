"use script";

let result = document.querySelector(".result");
let diceRollsAmount = parseInt(prompt("How many times i should roll the dice?"));
let total = 0;

for (let i = 0; i < diceRollsAmount; i++)
{
  total += Math.floor(Math.random() * 6) + 1;
}

result.innerHTML = "Dice was thrown " + diceRollsAmount + " times and total sum is " + total;
