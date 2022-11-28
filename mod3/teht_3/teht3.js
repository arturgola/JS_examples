'use strict';

const names = ['John', 'Paul', 'Jones'];

for (let name of names) {
    const li = document.createElement("li");
    li.innerText = name;
    document.getElementById("target").appendChild(li);
}