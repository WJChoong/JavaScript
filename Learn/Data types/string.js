let fruit = "banana";
let moreFruits = "banana\napple";

//calculate the length of the string
console.log(fruit.length);
//the index when character is found
console.log(fruit.indexOf("a"));
//the index when character is not found
console.log(fruit.indexOf("q"));
//index of multiple character
console.log(fruit.indexOf("nan"));
//slicing the string
console.log(fruit.slice(2, 5));
//replace 
console.log(fruit.replace("ban", "123"));
//convert to uppercase
console.log(fruit.toUpperCase());
//convert to lowercase
console.log(fruit.toLowerCase());
//retrieve data
console.log(fruit.charAt(2));
console.log(fruit[3]);
//split by characters
console.log(fruit.split(""));