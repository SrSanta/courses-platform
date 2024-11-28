//create class Course
class Course {
    constructor(id, name, description, duration, coordinates, finished, idStudent) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.duration = duration;
        this.coordinates = coordinates;
        this.finished = finished;
        this.idStudent = idStudent;
    }
}

// Crear un array para cargar los cursos
let courses = [
    {
        id: 1,
        name: "JavaScript",
        description: "Curso básico de JavaScript",
        duration: "20 horas",
        coordinates: { lat: 40.7128, lng: -74.0060 },
        finished: false,
        idStudent: 1
    }
]

// Función para crear un nuevo curso
function createCourse(name, description, duration, coordinates, finished, idStudent) {
    let id = 1;
    if (courses.length === 0) {
        id = 1;
    } else {
        id = courses[courses.length - 1].id + 1;
    }

    const newCourse = new Course(id, name, description, duration, coordinates, finished, idStudent);
    courses.push(newCourse);
}

// Función para listar todos los cursos
function listCourses() {
    return courses;
}

// Función para editar un curso existente
function editCourse(id, name, description, duration, coordinates, finished, idStudent) {
    const courseExist = courses.find(course => course.id === id);
    if (courseExist) {
        courseExist.name = name;
        courseExist.description = description;
        courseExist.duration = duration;
        courseExist.coordinates = coordinates;
        courseExist.finished = finished;
        courseExist.idStudent = idStudent;
    }
}

// Función para eliminar un curso por ID
function deleteCourse(id) {
    const position = courses.findIndex(course => course.id === id);

    if (position !== -1) {
        courses.splice(position, 1);
    }
}

export{Course, createCourse, listCourses, editCourse, deleteCourse};