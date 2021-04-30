'use strict';
// callback - a function that takes another function as a parameter

// const greeting = (firstname) => {
//     // creating a pop up with someones name printed inside
//     alert(`Hello ${firstname}`);
// }

// const writeSomething = (function1) => {
//     // creating an input box that takes the users name
//     let username = prompt("please enter your name"); //asks for user input
//     function1(username); // calling greeting and passing in user input
// }

// writeSomething(greeting);


let grades = [
    {"name":"Bob", "grade":8,"gender":"M"},
    { "name": "Marki", "grade": 8, "gender": "F" },
    { "name": "Warki", "grade": 8, "gender": "F" },
    { "name": "Markii", "grade": 10, "gender": "F" },
    { "name": "MarkMark", "grade": 1, "gender": "F" },
    { "name": "Markiwarki", "grade": 2, "gender": "F" },
    { "name": "M", "grade": 3, "gender": "M" },
    { "name": "W", "grade": 8, "gender": "M" },
    { "name": "ASDA", "grade": 6, "gender": "M" },
    { "name": "Tesco", "grade": 2, "gender": "M" },
    { "name": "Flower", "grade": 1, "gender": "M" },
    { "name": "Peanut", "grade": 8, "gender": "M" },
]

let isBoy = (student) => {
    student.gender === "M";
}

let isGirl = (student) => {
    student.gender === "F";
}

let getBoys = (grades) => {
    grades.filter(isBoy);
}

console.log(getBoys(grades));


/*
A promise is a placeholder for some data,
available immediately, some time in the future,
possibly not at all
*/

const hello = () => {}; // <-- named anonymous function
() => {}; // <-- anonymous function

let prompom = new Promise((resolve,reject) => {
    let a = 1+1;
    if(a==2){
        resolve(); //successful outcome
    } else {
        reject(); //failed outcome
    }

});

// if success .then() we want to do something
// else if rejected .catch()

// order of execution goes: 
prompom.then( () =>{
    console.log("This will execute for a RESOLVE() method");
}).catch(() => {
    console.error("This will execute for a REJECT() method");
}).then(() => {
    console.log(`I will execute, regardless of the outcome`);
})


//another example
let newPromise = new Promise( (resolve,reject)  => {
    //complicated logic
    consoler.log(`initial`);
    resolve();
    reject(); //unreachable code - reject associated with catch and won't run after .then() associated with resolve()
}).then(() => {
    console.log(`do this`);
}).then(() => {
    console.log(`straight after`);
}).catch(() =>{
    console.log(`oh no`)
})

