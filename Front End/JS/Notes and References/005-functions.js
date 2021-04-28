`use strict`;

add(1,2);
// function declaration = HOISTS
function add(a,b){
    console.log(a+b);
}


// hello(); at this point will give you runtime error
// function expression - prevents us from hoisting
const hello = function() {
    console.log("hello")
}
hello();


// arrow function
// syntax: const <name> = () => functionality
const hello2 = () => console.log("How cool is this");
hello2();

// multiline arrow function
const multiline = () => {
    console.log("line 1");
    console.log("line 2");
    console.log("line 3");
    console.log("line 4");
}
