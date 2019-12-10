"use strict";

var cad = "";

function valores(cadena, ventana) {
    cad = cadena.value;
    var cadpartida = cad.split(" ");
    var npalabras, ppalabra, upalabra;
    var pinversas = "", salida = "";

    npalabras = cadpartida.length;
    ppalabra = cadpartida[0];
    upalabra = cadpartida[cadpartida.length - 1];

    for (let i = cadpartida.length - 1; i >= 0; i--) {
        if (i == 0) {
            pinversas += cadpartida[i];
        } else {
            pinversas += cadpartida[i] + "-";
        }
    }

    salida += "El número de palabras en el array es: " + npalabras + "<br>";
    salida += "La primera palabra en el array es: " + ppalabra + "<br>";
    salida += "La última palabra en el array es: " + upalabra + "<br>";
    salida += "El array en orden inverso es: " + pinversas + "<br>";
    salida += "El array ordenado alfabéticamente es: " + cadpartida.sort() + "<br>";
    salida += "El array ordenado de la \"z\" a la \"a\" " + cadpartida.reverse();

    ventana.innerHTML = salida;

}