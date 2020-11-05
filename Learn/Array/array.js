//Create Array
let fruits = ["banana", "apple", "orange", "pineapples"];
let vegetables = new Array("asparaus", "tomato", "broccoli");

//access data of array
console.log(fruits);
console.log(fruits[1]);
console.log(vegetables[0]);

//replace data in array
fruits[0] = "peer";
console.log(fruits);

//one by one lay out data in array
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// array common method
console.log("to string ", fruits.toString()); //convert array to string
console.log(fruits.join("*")); //join data of array
console.log(fruits, fruits.pop(), fruits); //pops off the last index in array
console.log(fruits.pop(), fruits);
console.log(fruits.push("mango"), fruits); //appends
fruits[3] = "durian"; //add data into array
console.log(fruits)
fruits.shift(); //remove first element in array
console.log(fruits);
fruits.unshift("kiwi"); //add first element to array
console.log(fruits);

let groceries = fruits.concat(vegetables); //combine arrays
console.log(groceries);
console.log(groceries.slice(1, 4)); //get range of element from array (index to start, index of end + 1)
console.log(groceries.reverse()); //reverse all elements on array

let numbers = [4, 10, 44, 45, 23, 64, 76, 45, 39, 34];
//sort the array
console.log(numbers.sort()); //ascending order
console.log(groceries.sort()); //sort by character

//function in array
console.log(numbers.sort(function(a, b) { return a - b })); //accending order
console.log(numbers.sort(function(a, b) { return b - a })); //decending order

//Exercise
let empty = new Array();
for (let num = 0; num < 10; num++) {
    empty.push(num);
}
console.log(empty);