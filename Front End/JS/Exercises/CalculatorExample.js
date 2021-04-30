'use strict';

let number1 = document.querySelector("#number1");
let number2 = document.querySelector("#number2");
const result = document.querySelector("#answer");
const display = document.querySelector("#display")

const addButton = document.querySelector("#addButton");

const getValues = () => {
    return [Number.parseFloat(number1.value), Number.parseFloat(number2.value)];
}

const getFirstNumber = () => {
    return Number.parseFloat(number1,value);
}

//method for addition
const addition = () => {
    const [first,second] = getValues();
    const computation = first + second;
    result.value = computation;
    printToHistory(first,second,"+",computation);
}

//method for subtraction
const subtraction = () => {
    const computation = number1.value - number2.value;
    result.value = computation;
}

//method for multiplication
const multiplication = () => {
    const computation = number1.value * number2.value;
    result.value = computation;
}

//method for division
const division = () => {
    const computation = number1.value / number2.value;
    result.value = computation;
}

//convert to string
const printToHistory = (num1, num2, operator, result) => {
    const p = document.createElement("p");
    const text = document.createTextNode(`${num1} ${operator} ${num2} = ${result}`);
    p.appendChild(text);
    display.appendChild(p);
}

addButton.addEventListener("click", addition());