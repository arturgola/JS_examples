"use script";

let result = document.querySelector(".result");
let shouldCalculate = confirm("Should I calculate the square root?");

if (shouldCalculate === true)
{
  let number = parseInt(prompt("Type number to get square root:  "));
  if (number < 0)
  {
    result.innerHTML = "The square root of a negative number is not defined.";
  }
  else
  {
    result.innerHTML = "The square root of " + number + " is " + Math.sqrt(number);
  }
}
else
{
  result.innerHTML = "The square root is not calculated.";
}
