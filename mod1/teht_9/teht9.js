let target = document.querySelector(".result");
const number = parseInt(prompt("Enter a positive number: "));
let isPrime = true;

if (number === 1)
{
  target.innerHTML = "1 is neither prime nor composite number.";
}
else if (number > 1)
{
  for (let i = 2; i < number; i++)
  {
    if (number % i === 0)
    {
      isPrime = false;
      break;
    }
  }

  if (isPrime)
  {
    target.innerHTML = number + " is a prime number";
  }
  else
  {
    target.innerHTML = number + " is a not prime number";
  }
}
