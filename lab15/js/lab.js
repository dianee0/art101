// lab.js - The purpose of this assignment is to familarize ourselves with AJAX and APIs.
// Author: Diane Poeng
// Date: 5/30/23


function getStuff() {
	console.log("Clicked!");
  $.ajax({
    url: "https://pokeapi.co/api/v2/location/73",
    type: "GET",
    data: {},
  })
  .done(function(data) {
    let area = data.names[1].name;
    let region = data.region.name;
    $("#output").html("We are in the region of " + region + " where " + area + " lies.");
  })
}

$("button").click(getStuff);