

//let/const
let fname = "marki"; // let = a value we can change
const value = "doesn't change" // const = something that doesn't change

// print to terminal
console.log(fname);
console.log("weeeeeeee - printing onto the console of website - inspect - console");

let firstname = "Harry";
let age = 25;
let salary = 21234.30;
let siblings = ["one","two","three","four"];
let bool = false;

console.log(typeof firstname); //string
console.log(typeof age); //number 
console.log(typeof salary); //number
console.log(typeof siblings); //object
console.log(typeof bool); //boolean

// accessing array:
console.log(siblings[1]) // two

console.log(siblings[100]) // undefined 


// undefined = a reference that doesn't have a value - empty/actually nothing
let marki; // no initialisation at declaration

// null = a value that represents nothing - given a reference object a specific empty
let nothing = null; // explicitly saying you're empty

console.log(typeof marki); // empty
console.log(nothing); // null


// calculation + output string
let str = "5 + 3 = ";
let val = 5+3;
let str2 = str + val;
console.log(str2);

// template literal - outputs the same same 40 - 43
console.log(`5 + 3 = ${5+3}`);


// check for equality

let bool = true;
let bool2 = true;
let one = 1;

console.log(bool1 = bool2); // true
console.log(bool1 == one); // true

// strict equality - checks the value and the type
console.log(bool1 === one); // false - same value but not the same type

let variable; //undefined
let variable2 = null; //null


console.log(variable == variable2); // true - same values (both empty)
console.log(variable === variable2); // false - different types



// just check the value
console.log(1 == "1"); //true
console.log(1 != "1"); // false

// check the value and type
console.log(1 === "1"); // false
console.log(1 !== "1"); //true

// iterator
let x = 1;
console.log(x++); // 1 - "++" incriments the value of x
consoler.log(x) // 2

let y = 1;

console.log(++y); // 2 - incriments first and then prints

// loop
console.log("======================");
for (let i = 0; i<5; i++){
    console.log(i);
}


// loop doing same function except different way
console.log("======================");
for (let i=0; i<=3;) {
    console.log(`i = ${++i}`);
}

// for ( {initial expression}; {condition}; iterator) {

//}

// while loop => check the condition first, then it won't run if not passing
let pups = 0;
let enough = false;
while(enough){
    console.log("A pupppyy")
    pups++;
}

// do while => will run at least once before checking a condition


// switch => 
let now = new Date();

switch(now.getDate){
    case 0:
        console.log(`sunday`)
        break;
    case 1:
    case 2:
    case 3:
    case 4:
    case 5: 
        console.log(`Weekday`);
        break;
    case 6:
        console.log(`saturday`);
        break;
    default:
        console.log("who knows")
        break;
}

let greeting = `good`;

if(now.getHours() > 17){
    greeting += ` evening`;
} else {
    greeting += `morning`;
}

// ternary statement
// syntax: condition() ? valueiftrue : valueiffalse
let greeting2 = (now.getHours() > 17) ? `good evening` : `good morning`;

console.log(greeting2);