"use strict";

var datos = new Array();
var personastot = 0;
var mensaje = "";
var mediaingr = 0;
var min_ingr = Number.POSITIVE_INFINITY;
var max_ingr = 0;
var iva = 0;
var pulsar = 0;
var fpcita = new Date();
fpcita.setDate(fpcita.getDate() + 1);

function alta(dni, ecivil, ingresos, ventana) {
    var nif = dni.value;
    var estadoc = ecivil.options[ecivil.selectedIndex].value;
    var ingr = parseInt(ingresos.value);
    var valido = true;
    var usuario = new Array();
    var comprobar = /^[0-9]{8}-?[a-zA-Z]{1}$/;

    if (comprobar.test(nif)) {
        if (!isNaN(ingr)) {
            usuario.push(nif);
            usuario.push(estadoc);
            usuario.push(ingr);
            datos.push(usuario);
            personastot++;
            mediaingr += parseInt(ingr);
            if (max_ingr < ingr) {
                max_ingr = ingr;
            }
            if (min_ingr > ingr) {
                min_ingr = ingr;
            }
        } else {
            valido = false;
            mensaje = "<font color='red'>Los ingresos deben estar en formato número.</font>"
        }
    } else {
        valido = false;
        mensaje = "<font color='red'>Ese formato para DNI no es válido<font>"
    }

    if (valido) {
        mensaje = "Datos introducidos correctamente";
    }
    ventana.innerHTML = mensaje;
}

function mostrar(ventana) {
    datos.sort(function (a, b) {
        if (a[0] > b[0]) {
            return 1;
        }
        if (a[0] < b[0]) {
            return -1;
        }
        return 0;
    });

    mensaje = "";

    for (let i = 0; i < personastot; i++) {
        mensaje += "Usuario: " + datos[i][0] + " ---> " + datos[i][1] + ". Tiene unos ingresos anuales de: " + datos[i][2] + " euros.<br>"
    }
    ventana.innerHTML = mensaje;
}

function resumen(ventana) {
    mensaje = "";
    mensaje += "Nº de contribuyentes: " + personastot + "<br>";
    mensaje += "Media de ingresos: " + (mediaingr / personastot) + "<br>";
    mensaje += "Ingreso más alto: " + max_ingr + "<br>";
    mensaje += "Ingreso más bajo: " + min_ingr;
    ventana.innerHTML = mensaje;
}

function tributar(ventana) {
    mensaje = "";
    for (let i = 0; i < personastot; i++) {
        if (datos[i][2] >= 0 && datos[i][2] <= 14999) {
            iva = 3;
        } else if (datos[i][2] >= 15000 && datos[i][2] <= 24999) {
            iva = 10;
        } else if (datos[i][2] >= 25000 && datos[i][2] <= 39999) {
            iva = 20;
        } else if (datos[i][2] >= 40000) {
            iva = 30;
        }
        if (datos[i][1] == "Soltero") {
            iva -= 2;
        }
        if (datos[i][1] == "Casado" || datos[i][1] == "Divorciado") {
            iva -= 5;
        }
        mensaje += "Contribuyente: " + datos[i][0] + "\tImpuestos: " + iva + "%\tPaga: " + (datos[i][2] * iva / 100) + " (" + iva + "% de " + datos[i][2] + ")<br>";
    }
    ventana.innerHTML = mensaje;
}

function citaPrevia(ventana) {
    pulsar++;
    var dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    if (pulsar % 2) {
        fpcita.setDate(fpcita.getDate() + 1);
    }
    if (fpcita.getDay() == 0) {
        fpcita.setDate(fpcita.getDate() + 1);
    }
    if (fpcita.getDay() == 6) {
        fpcita.setDate(fpcita.getDate() + 2);
    }
    if (pulsar % 2) {
        if (pulsar <= 6) {
            mensaje += pulsar + "\t" + fpcita.toLocaleDateString() + "\t" + "(" + dias[fpcita.getDay()] + ")" + "<br>";
        }
    } else {
        if (pulsar <= 6) {
            mensaje += pulsar + "\t" + fpcita.toLocaleDateString() + "<br>";
        }
    }
    ventana.innerHTML = mensaje;
}