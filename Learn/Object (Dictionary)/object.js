let student = {
    first: "David",
    last: "Qazi",
    age: 25,
    studentInfo: function() {
        return this.first + "\n" + this.last;
    }
};
console.log(student.first); //access the data through key
student.first = "Boy";
console.log(student.first); //change value of the key
student.age++;
console.log(student.age);
console.log(student.studentInfo());