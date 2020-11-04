//Create function
function fun() {
    console.log("this is a function");
}
fun();

function greeting() {
    var name = prompt("what is your name");
    console.log("Hello, " + name);
}
greeting();

//Arguements
function sum(num1, num2) {
    var result = num1 + num2;
    console.log(result);
}
sum(10, 20);
sum("Hassanb", "Boy");