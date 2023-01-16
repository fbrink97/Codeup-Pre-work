"use strict";

var iffemyNameIs = 'Bob'; // TODO: Fill in your name here.

// TODO:
// Create a function called 'sayHello' that takes a parameter 'name'.
// When called, the function should log a message that says hello from the passed in name.
function sayHello(name) {
    console.log("Hello!")
}
// TODO: Call the function 'sayHello' passing the variable 'myNameIs' as a parameter.
sayHello(iffemyNameIs);
// Don't modify the following line
// It generates a random number between 1 and 100 and stores it in random
var ifferandom = Math.floor((Math.random()*100)+1);

// TODO:
// Create a function called 'isOdd' that takes a number as a parameter.
// The function should use the ternary operator to log a message.
// The log should tell the number passed in and whether it is odd or not.
function isOdd(random) {
    var nub = random % 2; 
    if (nub === 1) {
        console.log("Thats an odd number")
        } else {
        console.log("Thats even man.")
    }
}
// TODO: Call the function 'isOdd' passing the variable 'random' as a parameter.
isOdd(ifferandom);