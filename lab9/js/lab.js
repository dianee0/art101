// lab.js - The purpose of this assignment is to familarize ourselves with DOM documents in Javascript.
// Author: Diane Poeng
// Date: 5/10/23


let outputEl = document.getElementById("output");
let new1El = document.createElement("p");
new1El.innerHTML = "Welcome to";
let new2El = document.createElement("h1");
new2El.innerHTML = "MY WEBSITE";
outputEl.appendChild(new1El);
outputEl.appendChild(new2El);

console.log(outputEl);