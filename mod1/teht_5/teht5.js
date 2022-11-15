"use script";

let target = document.querySelector(".result");
let result = parseInt(prompt("Type year: "))
if ((result % 4 === 0 && result % 100 !== 0) || (result % 400 === 0))
{
    target.innerHTML = "Typed year is leap"
}
else
{
    target.innerHTML = "Typed year is not a leap year"
}