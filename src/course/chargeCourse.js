//logic for updating the table of courses
// Import required course.js functions
import {Course} from "./course.js";
import {courses} from "../assets/courses.js";
import {students} from "../assets/students.js";

// Create a test course
createCourse("JavaScript Basics", "Learn the basics of JavaScript", "20 hours", { lat: 40.7128, lng: -74.0060 }, false, 1);

// Function for updating the course table
window.onload = function loadCourses() {
    const tablaBody = document.getElementById("tableCourse");
    tablaBody.innerHTML = "";

    courses.forEach(course => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${course.id}</td>
            <td>${course.name}</td>
            <td>${course.description}</td>
            <td>${course.duration}</td>
            <td>${course.coordinates.lat}, ${course.coordinates.lng}</td>
            <td>${course.finished ? "Yes" : "No"}</td>
            <td>${course.idStudents}</td>
            <td>
                <div>
                    <button class="btn btn-danger btn-sm">Delete</button>
                    <a href="./editCourse.html" class="btn btn-success btn-sm">Edit</a>
                </div>
            </td>`;
        tablaBody.appendChild(row);

        row.querySelector(".btn-danger").addEventListener("click", () => {
            deleteCourse(course.id);
            loadCourses();
        });
    });
}

//Function to create a new course
function createCourse(name, description, duration, coordinates, finished, idStudents) {
    let id = 1;
    if (courses.length === 0) {
        id = 1;
    } else {
        id = courses[courses.length - 1].id + 1;
    }

    const newCourse = new Course(id, name, description, duration, coordinates, finished, idStudents);
    courses.push(newCourse);
}

//Function to delete a course by ID
function deleteCourse(id) {
    const haveStudents = students.some(student => student.course === id);
    if (haveStudents) {
        alert("has students cannot be eliminated");
        return;
    }

    const position = courses.findIndex(course => course.id === id);

    if (position !== -1) {
        courses.splice(position, 1);
    }
}