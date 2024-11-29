//logic for updating the table of students
//importing necessary functions from student/student.js
import {Student} from "./student.js";
import {students} from "../assets/students.js";
import {courses} from "../assets/courses.js";

//load the students with the listStudent() function from student/student.js, where we manage the students.
let studentsList = students;


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

//funtion to delete student by id
function deleteStudent(id) {
    const position = students.findIndex(student => student.id === id);

    console.log(position);

    if (position !== -1) {
        students.splice(position, 1);
    }
}

//text createStudent
createStudent("santa", 200, "polo");

//funtion to update the page to see the students
window.onload = function loadStudents() {
    const tableBody = document.getElementById("tableStudents");
    tableBody.innerHTML = "";

    studentsList.forEach(student => {
        const courseFind = courses.find((course) => course.id === student.course);
        const nameCourse = courseFind ? courseFind.name : "none";

        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.age}</td>
            <td>${student.address}</td>
            <td>${student.onGoing}</td>
            <td>${nameCourse}</td>
            <td>
                <div>
                    <button class="btn btn-danger btn-sm">Delete</button>
                    <a href= "./editStudent.html" class="btn btn-success btn-sm">Edit</a>
                </div>
            </td>`;
        tableBody.appendChild(row);

        row.querySelector(".btn-danger").addEventListener("click", () => {
            deleteStudent(student.id);
            loadStudents();
        })
    })
}
