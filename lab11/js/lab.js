// lab.js - the purpose of this assignment is to familarize and understand JavaScript libraries and jQuery.
// Author: Diane Poeng
// Date: 5/17/23


$("#challenge").append("<button id='button1'>Press me.</button>");
$("#problems").append("<button id='button2'>Press me.</button>");
$("#output").append("<button id='button3'>Press me.</button>");

$("#button1").click(function() {
  var color = $(this).css("background-color");
  if (color === "rgb(180, 213, 241)") {
    $(this).css("background-color", "pink");
  } else {
    $(this).css("background-color", "rgb(180, 213, 241)");
  }
});

$("#button2").click(function() {
  var color = $(this).css("background-color");
  if (color === "rgb(180, 213, 241)") {
    $(this).css("background-color", "pink");
  } else {
    $(this).css("background-color", "rgb(180, 213, 241)");
  }
});


$("#button3").click(function() {
  var color = $(this).css("background-color");
  if (color === "rgb(180, 213, 241)") {
    $(this).css("background-color", "pink");
  } else {
    $(this).css("background-color", "rgb(180, 213, 241)");
  }
});
