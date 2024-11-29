//create class Course
class Course {
    constructor(id, name, description, duration, coordinates, finished, idStudents) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.duration = duration;
        this.coordinates = coordinates;
        this.finished = finished;
        this.idStudents = idStudents;
    }
}

// Función para crear un nuevo curso
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

// Función para editar un curso existente
function editCourse(id, name, description, duration, coordinates, finished, idStudents) {
    const courseExist = courses.find(course => course.id === id);
    if (courseExist) {
        courseExist.name = name;
        courseExist.description = description;
        courseExist.duration = duration;
        courseExist.coordinates = coordinates;
        courseExist.finished = finished;
        courseExist.idStudents = idStudents;
    }
}

// Función para eliminar un curso por ID
function deleteCourse(id) {
    const position = courses.findIndex(course => course.id === id);

    if (position !== -1) {
        courses.splice(position, 1);
    }
}

export{Course, createCourse, editCourse, deleteCourse};