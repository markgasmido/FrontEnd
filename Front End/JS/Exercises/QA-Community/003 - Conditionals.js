let age = 10;
if(age >= 18 && age <= 65) {
    console.log("in range")
}else if(age < 18) {
    console.log("underaged");
    
}else {
    console.log("oldie")
}

let age2 = 100;
let result = age2 >= 50 ? "50 or over" : "Under 50";
console.log(result);