// lab.js - The purpose of this lab is to familarize ourselves with functions in JavaScript.
// Author: Diane Poeng
// Date: 4/27/23

// keep outside so we only call window.prompt() once. 
let userName = window.prompt("Enter your name so I can fix it: "); 
console.log("userName = ", userName);

function sortUsername(){
    // convert all letter to lowercase
    userName = userName.toLowerCase();
    // replaces all whitespace with no space, hence the "\\s" syntax that looks for any space
    userName = userName.replaceAll("\\s",""); 

    // split each letter to an array
    const nameArray = userName.split('');
    console.log("nameArray: ", nameArray);

    //sorting array 
    const nameArraySort = nameArray.sort();
    console.log("nameArraySort = ", nameArraySort);

    const nameSorted = nameArraySort.join('');
    console.log("nameSorted = ", nameSorted);

    return nameSorted;
}

function createAnagram(){
    let user = sortUsername(); // call the sorted user name function
    
    const anaArr = user.split('');
    const shuffleArr = anaArr.sort(() => 0.5 - Math.random()); // shuffles letters


    let combineAnagram = shuffleArr.join('');
    console.log("combineAnagram = ", combineAnagram);

    const firstLetter = combineAnagram.charAt(0).toUpperCase(); // makes the first letter capital
    let remainingLetters = combineAnagram.slice(1); // get every letter beginning at index 1 (not 0)

    finalAnagram = firstLetter + remainingLetters; // combine the first letter and the remaining letters

    return finalAnagram; // returns the final name

    

}

document.writeln("Your name has been fixed and sorted lexicographically: ", sortUsername(), "</br>");
document.writeln("Anagram Name: ", createAnagram(), "</br>");