var button = document.getElementById("my-button");

button.addEventListener("click", function(){
    let name = prompt("Insert your name: ");
    let h1 = document.getElementById('hello');
    h1.innerHTML = `Hello ${name}`;
    
});

var myButt = document.getElementById("button2");
myButt.addEventListener("click", function(){
    var inputEl = document.getElementById("my-input");
    var value = inputEl.value;
    console.log(value);
    newEl = document.createElement('p');
    newEl.innerHTML = value;
    document.getElementById("output").appendChild(newEl);
});

