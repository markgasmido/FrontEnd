'use strict';

// # = ID
// . = CLASS


// selecting elements on the document.
let oikawa = document.querySelector("#oikawa");
let div = document.querySelector(".addToMe");

console.log(oikawa); // refers to the line in html doc

// changing the attributes of oikawa using JS
oikawa.setAttribute("alt","oikawa best setter FOREVER");
oikawa.setAttribute("width","200px");
oikawa.setAttribute("height", "200px");

let newHeading = document.createElement("h1"); // <h1></h1>
let text = document.createTextNode("We love JS!") // "we love JS"

// appending text to heading
newHeading.appendChild(text);

// appending the heading to div - which will show onto the page
div.appendChild(newHeading);

