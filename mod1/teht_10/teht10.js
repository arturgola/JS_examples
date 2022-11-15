let target = document.querySelector(".result");
const diceAmount = parseInt(prompt("Enter amount of dice: "));
const totalSum = parseInt(prompt("Enter total sum: "));
let successRolls = 0;

for (let i = 0; i <= 10000; i++)
{
  let total = 0;
  for (let i = 0; i < diceAmount; i++)
  {
    total += Math.floor(Math.random() * 6) + 1;
  }

  if (total === totalSum)
  {
    successRolls++;
  }
}

const percentage = (successRolls / 10000) * 100;
target.innerHTML = "Probability to get sum" + totalSum + " with " + diceAmount + " dice is " + percentage + "%";
