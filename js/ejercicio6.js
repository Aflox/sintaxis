"use strict";

function obtenerDomingos() {
    var dia;

    for (let anyo = 2014; anyo <= 2050; anyo++) {
        dia = new Date(anyo, 0, 1);

        if (dia.getDay() == 0) {
            document.write("1 de enero es un domingo en " + anyo + "</br>");
        }
    }
}

obtenerDomingos();