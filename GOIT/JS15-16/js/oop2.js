var human = {
    name: "",
    age: 0,
    gender: "",
    height: 0,
    weight: 0
};

var student = {
    scholarship: 0,
    studyPlace: "",
    watchShows: function () {
        console.log(this.name + " is watching show and studying at the " + this.studyPlace);
    }
};

var worker = {
    workPlace: "",
    salary: 0,
    toWork: function () {
        console.log(this.name + " is working at the " + this.workPlace);
    }
};

student.__proto__ = human;
worker.__proto__ = human;

var Tim = worker;
Tim.salary = 120000;
var Tom = worker;
Tom.workPlace = "Corp.";
Tom.name = "Tom";

console.log("Tom: ", Tom);
Tom.toWork();
