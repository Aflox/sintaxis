function Persona (nombre, edad, genero){
    this.nombre = nombre;
    this.edad = edad;
    this.genero = genero;
    this.obtDetalles = function(){
        return this.nombre + " " + this.edad + " años, " + this.genero;
    }
}

function Estudiante (nombre, edad, genero){
    Persona.call(this, nombre, edad, genero);
    this.curso;
    this.grupo;
    this.registrar = function(curso, grupo){
        this.curso = curso;
        this.grupo = grupo;
    }
}
Estudiante.prototype = new Persona;

function Profesor (nombre, edad, genero){
    Persona.call(this, nombre, edad, genero);
    this.asignatura;
    this.nivel;
    this.asignar = function(asignatura, nivel){
        this.asignatura = asignatura;
        this.nivel = nivel;
    }
}
Profesor.prototype = new Persona;