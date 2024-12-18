let courses = [
    {
        id: 1,
        name: "JavaScript",
        description: "Curso básico de JavaScript",
        duration: "20 horas",
        coordinates: { lat: 40.7128, lng: -74.0060 },
        finished: false,
        idStudents: [1]
    },
    {
        id: 2,
        name: "HTML y CSS",
        description: "Aprende a diseñar páginas web con HTML y CSS",
        duration: "15 horas",
        coordinates: { lat: 34.0522, lng: -118.2437 },
        finished: true,
        idStudents: [2, 3]
    },
    {
        id: 3,
        name: "React",
        description: "Curso avanzado de desarrollo frontend con React",
        duration: "30 horas",
        coordinates: { lat: 51.5074, lng: -0.1278 },
        finished: false,
        idStudents: [1, 3, 4]
    }
];

export {courses};