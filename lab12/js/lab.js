// lab.js - The purpose of this assignment is to familarize and understand conditionals in JavaScript.
// Author: Diane Poeng
// Date: 5/18/23



function sortingHat(str){
  let len = str.length;
  let mod = len % 4;

  if (mod == 0){
    return "Gryffindor";
  }

  else if (mod == 1){
    return "Ravenclaw";
  }

  else if (mod == 2){
    return "Slytherin";
  }

else if (mod == 3){
  return "Hufflepuff";
}

}

var myButton = document.getElementById("button");
myButton.addEventListener("click", function() {
let name = document.getElementById("input").value;
let house = sortingHat(name);

  if (house === "Gryffindor"){
    describe = "<p>Gryffindors value bravery, daring, nerve, and chivalry. Its emblematic animal was the lion, it's representative gemstone was rubies, and its colors were scarlet and gold.</p>";
  }

  else if (house === "Ravenclaw"){
    describe = "<p>Ravenclaws value intelligence, knowledge, curiosity, creativity and wit. Its emblematic animal was the eagle, it's representative gemstone was sapphires, and its colors were blue and bronze.</p>";
  }

  else if (house === "Slytherin"){
    describe = "<p>Slytherins value ambition, leadership, self-preservation, cunning and resourcefulness and was founded by Salazar Slytherin. Its emblematic animal was the serpent, it's representative gemstone was emeralds, and its colors were emerald green and silver.</p>";
  }

else if (house === "Hufflepuff"){
  describe = "<p>Hufflepuffs value hard work, dedication, patience, loyalty, and fair play. Its emblematic animal was the badger, it's representative gemstone was yellow diamonds, and yellow and black were its colors.</p>";
}

let newText = "<p>The sorting Hat has sorted you into: " + house + "</p>" + describe;
document.getElementById("output").innerHTML = newText;

});
