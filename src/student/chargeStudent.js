//logic for updating the table of students
//importing necessary functions from student/student.js
import { Student, createStudent, deleteStudent } from "./student.js";
import {students} from "../assets/students.js";

//load the students with the listStudent() function from student/student.js, where we manage the students.
const studentsList = students;


//funtion to update the page to see the students
window.onload = function loadStudents() {
    const tableBody = document.getElementById("tableStudents");
    tableBody.innerHTML = "";
    studentsList.forEach(student => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.age}</td>
            <td>${student.address}</td>
            <td>${student.onGoing}</td>
            <td>${student.course}</td>
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
