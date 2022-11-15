"use script";

let target = document.querySelector("#target")
let name = prompt("Type you're name: ");
let result = Math.floor(Math.random()*4)+1;

if (result === 1)
    target.innerHTML = name + " you are a Slytherin!"
else if (result === 2)
    target.innerHTML = name + " you are a Gryffindor!"
else if (result === 3)
    target.innerHTML = name + " you are a Ravenclaw!"
else
    {target.innerHTML = name + " you are a Hufflepuff!"}