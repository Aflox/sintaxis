"use strict"
// Implementar el apartado de fines de semana.
var hoy = new Date(), diasres = new Date(2019, 11, 25);
var contador = 0;

for (let x = hoy.getDate(); x < diasres.getDate(); x++) {
    contador++;
}

document.write("Quedan " + contador + " días hasta Navidad.");