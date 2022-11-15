"use script";

let result = document.querySelector(".result")
let dogAmount = 6
let dogNames = []

for (let i = 0; i < dogAmount; i++)
{
    let name = prompt("Enter a name");
    dogNames.push(name);
}
let sortedDogs = dogNames.sort()
let reverseSortedDog = sortedDogs.reverse()

let html = "<ul>";
for (let i = 0; i < 6; i++)
{
    html += "<li>";
    html += reverseSortedDog[i];
    html += "</li>";
}

html += "</ul>";
result.innerHTML = html
