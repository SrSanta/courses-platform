//create class Student
class Student {
    constructor(id, name, age, address, onGoing) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.address = address;
        this.onGoing = onGoing;
    }
}

//create array to load the students from students.json
let students = [];

//funtion to create new student
function createStudent(name, ege, address){
    const id = 1;
    if (students.length) {
        id = students[students.length-1].id + 1;
    }

    const newStudent = new Student(id, name,age, address);
    students.push(newStudent);
};

//funtion to list all the students
function listStudents(){
    return students;
};