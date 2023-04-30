// index.js - The purpose of this lab is to familarize ourselves with arrays and objects in JavaScript.
// Author: Diane Poeng
// Date: 4/27/23

// Variables
let myTransport = ["bus", "walk", "car"];
let myMainRide = {
  make: "Hyundai", 
  model: "Elantra",
  color: "grey",
  year: 2018,
  age: function() {
      return 2022 - this.year;
  }
}

// output
document.writeln("Kinds of transportation I use: " + myTransport + ".</br>");
document.writeln("My Main Ride: <pre>", 
  JSON.stringify(myMainRide, null, '\t'), "</pre>");

