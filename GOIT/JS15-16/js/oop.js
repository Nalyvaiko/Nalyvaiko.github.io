function Human(name, age, gender, height, weight) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.height = height;
    this.weight = weight;
};

function Worker(workPlace, salary, name, age, gender, height, weight) {
    Human.apply(this, [name, age, gender, height, weight]);
    this.workPlace = workPlace;
    this.salary = salary;
};

function Student(studyPlace, scholarship, name, age, gender, height, weight) {
    Human.apply(this, [name, age, gender, height, weight]);
    this.studyPlace = studyPlace;
    this.scholarship = scholarship;
};

Worker.prototype = Object.create(Human.prototype);
Worker.prototype.constructor = Worker;
Worker.prototype.toWork = function () {
    console.log(this.name + " is working at the " + this.workPlace);
};

Student.prototype = Object.create(Human.prototype);
Student.prototype.constructor = Student;
Student.prototype.watchShows = function () {
    console.log(this.name + " is watching show and studying at the " + this.studyPlace);
};

var newWorker = new Worker("ABC", 100000, "Jack", 30, "M", 185, 80);
var newStudent = new Student("Univer", 1000, "Mike", 20, "M", 180, 70);
var newStudent2 = new Student("Institut", 1020, "Alice", 22, "W", 165, 50);

newWorker.toWork();
newStudent.watchShows();
newStudent2.watchShows();
