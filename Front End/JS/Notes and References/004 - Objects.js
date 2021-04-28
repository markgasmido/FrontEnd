`use strict`;

// JSON - Javascript object notation
let myJSONObject = {
    "tesco": [
        { "productName": "7up", "price": 0.99, "quantity": 5000 },
        { "productName": "bread", "price": 10.99, "quantity": 50 },
        { "productName": "goat", "price": 110.99, "quantity": 1000 }
    ],

    "carpark": [ 
        {
            "name": "marki",
            "make": "markimake",
            "model": "markimodel",
            "year": 2020,
            "colour": "markiorange"
        }
    ]
}

// adding to object

myJSONObject.carpark.push({
    "name": "marki2",
    "make": "markimake2",
    "model": "markimodel2",
    "year": 20202,
    "colour": "markiorange2"
})

console.log(myJSONObject);
// convert object to string
let convertToString = JSON.stringify(myJSONObject);

console.log(convertToString);

let userData = `{"name":"marki"}`;

console.log(typeof userData);

let convertToObject = JSON.parse(userData);
console.log(convertToObject);