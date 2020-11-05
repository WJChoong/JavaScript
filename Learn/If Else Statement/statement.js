// && = AND
// !! = OR

// If Else Statement
var age = prompt("what is your age"); //if re
if ((age >= 18) && (age <= 35)) {
    status = "target demo";
} else {
    status = "not my audience";
}
console.group(status);

//Switch statements
//day 0, 5, 6 --> weekend
//others day --> weekday
switch (2) {
    case 0:
        text = "weekend";
        break;
    case 5:
        text = "weekend";
        break;
    case 6:
        text = "weekend";
        break;
    default:
        text = "weekday";
}
console.log(text);