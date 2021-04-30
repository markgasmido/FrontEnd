'use strict';
//  Scope - visibility of a variable in a file/project

const someFunction = () => {
    const hello = `Billy bob joe`; // variable has got LOCAL scope - if a variable isn't declared with a let/const/var inside a function it's scope becomes global
    console.log(`${hello} called from the function`);
}

someFunction();
// console.log(hello); // cannot call because hello isn't a global variable

let check = false;

// if a variable isn't declared with a let/var/const then JS checks the local scope and then the global scope
const changeCheck = () => {
    check = true;
    console.log(check);
}

// anything declared inside a function has local scope - unless previously stated in 14
console.log(check); // false
changeCheck(); // true;
console.log(check); // false


//we look within before going else where
let flag;
const test = () => {
    flag = true; //declares global variable flag
    console.log(flag); // true
    test1(); // calls test 1 - updates to false
    console.log(flag); // false
}

const test1 = () => {
    flag = false; // looks for global variable flag - updates to false if exist - create if not
    return;
}

test();

// another test

const anotherOne = () => {
    x = true; // creates global variable true
    console.log(x); // true
    anotherOneAgain(); // calls another one again
    console.log(x); // true
}

const anotherOneAgain = () => {
    let x = false; // sets local variable false (let used)
    return;
}

// testing scope
if(true){
    let  y = "hello";
}
// console.log(y);

//
let bankBalance = 100;

const deposit = (bank, val) =>{
    bankBalance = bank; //changes the global variable to the parsed in local variable
    bankBalance = bank+val; // adds value to the bankbalance
    console.log(bankBalance); 
}

deposit(bankBalance,50); //150
console.log(bankBalance); //150