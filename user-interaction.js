"use strict";

// TODO: Ask the user for their name.
//       Keep asking if an empty input is provided.
var response = prompt("What is your name?");
if (response === "") {
    prompt("What is your name?");
} else {
    console.log(`Welcome ${response}!`);
}
// TODO: Show an alert message that welcomes the user based on their input.

// TODO: Ask the user if they like pizza.
//       Based on their answer show a creative alert message.
var favPizza = prompt("What is your favorite pizza?");
alert(`${favPizza} is such a fantastic choice, i love that type as well!`);