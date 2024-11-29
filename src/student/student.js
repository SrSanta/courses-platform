import {students} from "../assets/students.js";

//create class Student
class Student {
    constructor(id, name, age, address, onGoing, course) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.address = address;
        this.onGoing = onGoing;
        this.course = course;
    }
}

//funtion to create new student
function createStudent(name, age, address) {
    let id = 1;
    if (students.length === 0) {
        id = 1;
    } else {
        id = students[students.length - 1].id + 1;
    }

    const newStudent = new Student(id, name, age, address, false);
    students.push(newStudent);
}

//funtion to edit existing student
function editStudent(id, name, age, address, onGoing) {
    const studentExist = students.find(student => student.id === id);
    if (studentExist) {
        studentExist.name = name;
        studentExist.age = age;
        studentExist.address = address;
        studentExist.onGoing = onGoing;
    }
}

//funtion to delete student by id
function deleteStudent(id) {
    const position = students.findIndex(student => student.id === id);

    console.log(position);

    if (position !== -1) {
        students.splice(position, 1);
    }
}

export { Student, createStudent, editStudent, deleteStudent };