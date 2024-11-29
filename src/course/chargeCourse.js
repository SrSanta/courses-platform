//logic for updating the table of courses
// Import required course.js functions
import { Course, listCourses, createCourse, deleteCourse } from "./course.js";

// Create a test course
createCourse("JavaScript Basics", "Learn the basics of JavaScript", "20 hours", { lat: 40.7128, lng: -74.0060 }, false, 1);

// Load courses with the listCourses() function from course.js
const courses = listCourses();

// Function for updating the course table
function loadCourses() {
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
            <td>${course.idStudent}</td>
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

loadCourses();