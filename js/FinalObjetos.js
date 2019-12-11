"use strict";

function cat(nombre) {
    this.nombre = nombre;
    var sonido = "Miau"; //Declara variable en el ámbito del objeto, esto la hace privada

    this.dice = function () { //Método añadido en el constructor
        return sonido;
    }
}

cat.prototype.especie = function () { //Método añadido a su prototipo
    return "Persa";
}
//Se pueden declarar los métodos de las 2 maneras, la segunda es más por si nos hace falta una funcionalidad más adelante en el código.

console.log("Ejemplo1: Creación de instancias");
var cat1 = new cat("Fuffy");
var cat2 = new cat("Misifu");

//Creo y defino propiedades fuera del constructor:

Object.defineProperty(cat.prototype, "numPat", { //Si se lo paso al prototype se aplicará a todos los elementos de la clase, si no solo al elemento definido.
    value: 4,
    writable: true,
    enumerable: true,
    configurable: true
});

console.log(cat1.nombre + " " + cat2.nombre);
console.log(cat1.numPat + " " + cat2.numPat);
console.log(cat1.dice() + " " + cat2.dice());
console.log("");

//Otra manera de crear objetos
var dog = new Object();
dog.name = "Scooby";
dog.owner = {};
dog.owner.name = "Pepito";
dog.bark = function () {
    return "Guagua";
}

var dog2 = {
    name: "Sco2", //Forma normal
    owner: { //Objeto dentro de objeto
        name: "Luis",
        edad: 34
    },
    bark: function () { //Forma literal
        return "Guaguau"
    }
};

dog[name];//Se accede al campo del objeto directamente (forma literal)
console.log(dog.name);
console.log(dog.owner.name);
console.log(dog.bark());
console.log("");

function cartera() {
    var dinero = 0;
    Object.defineProperty(this, "cantidad", { //Las propiedades get y set tenemos que definirlas
        get: function () {
            return dinero;
        },
        set: function (value) {
            dinero = value;
        }
    });

    this.checkSaldo = function () {
        if (this.cantidad < 100) { //Llamamos al método que accede a nuestra variable privada (cantidad que accede a dinero)
            return "Tienes poco dinero"
        } else {
            return "No te preocupes por el dinero"
        }
    }
}

cartera.prototype.cobroNomina = function (salario) {
    this.cantidad = salario + this.cantidad;
    return this.cantidad;
}

console.log("Ejemplo Cartera con getter y setter");
// var monedero = new cartera(); //Creación mediante constructor
var monedero = Object.create(cartera.prototype); //Creación mediante el método Object | INVESTIGAR!! --> Induce a error si se intenta manejar como un constructor normal!!
console.log(monedero.cantidad); //Siempre hay que interactuar de esta manera (getter y setter)
console.log(monedero.dinero); //Al ser variable privada no se puede acceder a ella, se crearía una nueva variable
console.log(monedero.cobroNomina(1800));
monedero.cantidad = 300; //Llamada al método set, sobrescribe y asigna
console.log(monedero.checkSaldo());
console.log(monedero.cantidad);