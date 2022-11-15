"use script";

function isLeapYear(year)
{
  const leap = new Date(year, 1, 29).getDate() === 29;
  if (leap)
  {
    return true;
  }
  else
  {
    return false;
  }
}

let ul = document.querySelector(".result");
let startYear = parseInt(prompt("Please enter start year?"));
let endYear = parseInt(prompt("Please enter end year?"));
let currentYear = startYear;

while (currentYear <= endYear)
{
  if (isLeapYear(currentYear))
  {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(currentYear));
    ul.appendChild(li);
  }
  currentYear += 1;
}
