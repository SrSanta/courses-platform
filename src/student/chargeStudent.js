//logic for updating the table of students
//importing necessary functions from student/student.js
import { Student, listStudents, createStudent, deleteStudent } from "./student.js";

//create a test student
createStudent("santa", 200, "polo");
//load the students with the listStudent() function from student/student.js, where we manage the students.
const students = listStudents();


//funtion to update the page to see the students
function loadStudents() {
    const tableBody = document.getElementById("tableStudents");
    tableBody.innerHTML = "";
    students.forEach(student => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.age}</td>
            <td>${student.address}</td>
            <td>${student.onGoing}</td>
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

loadStudents();