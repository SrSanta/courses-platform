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
let students = [{
    id: 1,
    name: "Andrés",
    age: 21,
    address: "Calle",
    onGoing: false
}]

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

//funtion to list all the students
function listStudents() {
    return students;
}
console.log(listStudents());

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

export { Student, listStudents, createStudent, editStudent, deleteStudent };