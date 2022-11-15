"use script";

let result = document.querySelector(".result")
let numberOfParticipants = prompt("How many participants are there?");
let participants = []

for (let i = 0; i < numberOfParticipants; i++)
{
    let name = prompt("Enter a name");
    participants.push(name);
}

let html = "<ol>";
for (let i = 0; i < participants.length; i++)
{
    html += "<li>";
    html += participants[i];
    html += "</li>";
}

html += "</ol>";
result.innerHTML = html
