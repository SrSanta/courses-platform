# courses-platform
Project for web client environment, course platform in which we have a structure of students, teachers and courses. With this I will make a small outline of what will be my integrated project.
At the beginning we will have only the administration of students by teachers, where a teacher can only make changes on students (each student will have only one teacher, but teachers will have several students in their charge).

Administrators will be able to add teachers and teachers will be able to add students under their responsibility.

The teacher will have the following data: name (text), id (number), classroom (coordinates) and if he uses the platform (boolean).

The student will have the following data: name (text), id (number), classroom (coordinates) and if they attend (boolean).

## Descripción de carpetas y archivos

### Archivos principales
- **package.json**: Contiene las dependencias y scripts del proyecto.
- **README.md**: Este archivo con la documentación del proyecto.

### Directorio `src`
Contiene el código fuente del proyecto:
- **index.html**: Página principal.
- **main.js**: Archivo JavaScript principal.

#### Subdirectorio `alumno`
Archivos relacionados con la gestión de alumnos:
- **alumno.css**: Estilos específicos de alumnos.
- **alumno.js**: Lógica de alumnos.
- **crearAlumno.html**: Página para crear un alumno.
- **editarAlumno.html**: Página para editar un alumno.
- **listaAlumnos.html**: Página con la lista de alumnos.

#### Subdirectorio `assets`
Archivos JSON que sirven como datos de ejemplo:
- **alumnos.json**: Lista de alumnos.
- **profesores.json**: Lista de profesores.

#### Subdirectorio `css`
- **main.css**: Archivo de estilos principal.

#### Subdirectorio `curso`
Archivos relacionados con la gestión de cursos:
- **crearCurso.html**: Página para crear un curso.
- **curso.css**: Estilos específicos de cursos.
- **curso.js**: Lógica de cursos.
- **editarCurso.html**: Página para editar un curso.
- **listaCursos.html**: Página con la lista de cursos.
