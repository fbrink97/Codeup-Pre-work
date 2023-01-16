"use strict";

// Don't change the next two lines!
// These creates two variables for you:
//     one with the colors of the rainbow
//     another with a single random color value
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var color = colors[Math.floor(Math.random()*colors.length)];

var favorite = 'blue'; // TODO: change this to your favorite color from the list

// TODO: Create a block of if/else statements to check for every color except indigo and violet.
// TODO: When a color is encountered log a message that tells the color, and an object of that color.
//       Example: Blue is the color of the sky.
if (colors == 'red') {
    console.log("Red is the color of Kansas City Chiefs.")
} else if (colors == 'orange') {
    console.log('Oranges are orange.')
} else if (colors == 'yellow') {
    console.log('Yellow is the color sulfur')
} else if (colors == 'green') {
    console.log('My favorite apples are green.')
} else if (colors == 'blue') {
    console.log('The ocean is blue because it reflects the sky.')
} else {
    console.log('I do not know anything by that color.')
}
// TODO: Have a final else that will catch indigo and violet.
// TODO: In the else, log: I do not know anything by that color.

// TODO: Using the ternary operator, conditionally log a statement that
//       says whether the random color matches your favorite color.
var color = (favorite) ?  "That matches my favorite color!" : "I dont like that color";