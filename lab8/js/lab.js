// lab.js - the purpose of this assignment is to familarize and understand anonymous functions and callback functions.
// Author: Diane Poeng
// Date: 5/4/23

// Constants
numberArray = [69, 973, 910, 9, 10, 4, 23];

// Functions

// This function will add to itself (or multiply by 2 to itself: 2x)
function addition(x){
  var results = x + x;
  return results;
}

// testing addition function
console.log(addition(5));
console.log(addition(10));
console.log(addition(2));

// using map() for the addition function
var mapResult = numberArray.map(addition);
// prints a result: [138, 1946, 1820, 18, 20, 8, 46]
console.log("What the array looks like when we add x to itself: ", mapResult);

// This function will subtract 69 from the value of x
var subResult = numberArray.map(function(x) {
  return x - 69;
});
// prints a result: [0, 904, 841, -60, -59, -65, -46]
console.log("The solution of each value when subtracted by 69: ", subResult);

// Get the reference to the output div element
var outputEl = document.getElementById("output");

// Define your combinedResults variable
var combinedResults = "Original Array: [" + numberArray +
                     "]<br>Adding x to itself Array: [" + mapResult +
                     "]<br>Subtracting 69 Array: [" + subResult +
                     "]";

// Update the content of the output div
outputEl.innerHTML = combinedResults;
