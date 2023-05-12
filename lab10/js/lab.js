// lab.js - the purpose of this assignment is to familarize and understand JavaScript events and forms.
// Author: Diane Poeng
// Date: 5/4/23

// function obtained from Professor Modes
function sortUserName(userName) {
  return userName.toLowerCase().split("").sort().join("");
}

let button = document.getElementById("my-button");

button.addEventListener("click", function(){ // Attach an event listener to your button 
  // Gets the value of your input field
  inputEl = document.getElementById("user-name");
  var value = inputEl.value;
  // Runs that value through your sort() or anagram() function and saves the results.
  value = sortUserName(value);

  // Replaces the html in <div id=output> with the results.
  newEl = document.createElement('p');
  newEl.innerHTML = value;
  document.getElementById("output").appendChild(newEl);
});

let waterButton = document.getElementById("watermelon");
waterButton.addEventListener("click", function(){
  let popup = document.getElementById("popup");
  let image = document.createElement("img");

  // set image source to watermelon image
  image.src = "../lab10/img/watermelon.png";

  popup.appendChild(image);

  // display popup
  popup.style.display = "block";

  // disable button after first click
  waterButton.disabled = true;
});

window.onclick = function(event){
  if (event.target !== waterButton && !popup.contains(event.target)){
      // Remove the image element from the popup
      let image = popup.querySelector("img");
      if (image) {
          image.remove();
      }
  
      // Hide the popup
      popup.style.display = "none";
  
      // Enable the button again
      waterButton.disabled = false;
  }
};
