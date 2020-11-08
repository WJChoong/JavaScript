function ageInDays() {
    var birthyear = prompt("What is your age ?");
    var ageInDays = (2020 - birthyear) * 365;
    var h1 = document.createElement("h1"); /*creating a new element*/
    var textAnswer = document.createTextNode("You are " + ageInDays + " days old"); /*create  text*/
    h1.setAttribute("id", "ageInDays"); /*declare id for the element*/
    h1.appendChild(textAnswer); /*placing the text into the element*/
    document.getElementById("result").appendChild(h1); /*choose location for the element to create*/
}

function reset() {
    document.getElementById("ageInDays").remove(); /*remove the element*/
}