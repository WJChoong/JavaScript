console.log("hello");

//assignment variable
var b = "hey guys";
console.log(b);

var number = 65;
console.log(number);

// asking for input
var age = prompt("What s your age?")
    // apply action on DOM
document.getElementById("sometext").innerHTML = age;

var num1 = 68.5;
num1--; //decrement by 1
console.log(num1);

//incremental
num1 = num1 + 1;
num1++; //increment by 1
document.getElementById("number").innerHTML = num1;

//Increment by 10
var num = 10;
num += 10;
console.log(num);

//Data type
let num = 18; //number
let yourName = "Bob"; //string
let name = { first: "Jason", second: "Jane" }; //object/dictionary
let truth = false; //boollean
let array = ["apple", "banana", "orange"]; //array
let random; //undefined
let nothing = null; //value null

/*
let - for those variables which make not much changes
    - could not be redefine
var - for those variables which coould always change
    - could be redefine

*/