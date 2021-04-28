`use strict`;

// Arrays are a way to store information
let array = Array(10);
let arrayShortHand = []; // <-- convention

console.log(arrayShortHand);
console.log(array[7]);

// in JS you can access any index at any time - if it is empty then the value is held as undefined
// sparsely filled - any unassigned part is undefined
// resize at any time
arrayShortHand[3] = "Audi A1";

console.log(arrayShortHand); // [undefined, undefined, undefined, audi a1]


let animals = [];
animals.length = 14; // sets the length of the array
animals[16] = "hello"; //inputs "hello" into array animals index 16

console.log(animals); // 16x empty - 1x hello

let classroom = [];
classroom[0] = "marki";
classroom[1] = {"id":"student", "room":"25B","classmates":"123"};
classroom[5] = null;


// inputs a value into the end of the array
classroom.push("Fruity"); 
console.log(classroom);

// deletes the last value of an array
classroom.pop();
console.log(classroom);

// add to the start of the array
classroom.unshift("some value");
console.log(classroom);

// remove from the start of the array
classroom.shift();
console.log(classroom);

// when will the .length ever be useful?
for(let i = 0; i<classroom.length; i++){
    console.log(classroom[i]);
}

// enhanced for loop
console.log("=============")
for(let person of classroom){
    console.log(person);
}

// Objects - key/value pair
// container of relevant information
// let cars = new Object();
let myObj = {}; // initialises an object (short hand);


// object contains information about one thing
let markisCar = {
    "name" : "marki",
    "make" : "markimake",
    "model" : "markimodel",
    "year" : 2020,
    "colour" : "markiorange"
}


let markisSecondCar = {
    "name": "marki",
    "make": "markimake",
    "model": "markimodel",
    "year": 2020,
    "colour": "markiorange"
}

// accessing a property of an object - similar to how you would an array
console.log(markisCar["model"]);
// another way of accessing an object's attributes
console.log(markisCar.colour);

// adding a new property to an object
markisCar.thisIsANewProperty = 123;

console.log(markisCar);

// printing out the values of an object
for(let attributes in markisCar){
    console.log(`Keys: ${attributes}`);
    console.log(`Value: ${markisCar[attributes]}`)
}

let garage = [markisCar,markisSecondCar,{"make":"Audi", "model" : "S5", "year" : 2015, "colour" : "orange"}];

//enhanced for loop to access data inside an item
for(let carInGarage of garage){
    console.log(carInGarage["make"]);
}

//normal for loop

for(let i=0; i<garage.length; i++){
    console.log(garage[i].make);
}

// loop loop to get each attribute from each car in the garage

for(let i of garage){
    for(let car in i ){
        console.log(`Key: ${car} Value: ${i[car]}`);
    }
}