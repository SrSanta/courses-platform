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

export{Course};