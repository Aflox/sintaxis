"use strict"

function addZero(num) {
    if (num < 10) {
        num = "0" + num;
    }
    return num;
}

function imprimeReloj() {
    var reloj = new Date();
    var hora = addZero(reloj.getHours());
    var minutos = addZero(reloj.getMinutes());
    var segundos = addZero(reloj.getSeconds());

    document.getElementById("ventana").innerHTML = hora + ":" + minutos + ":" + segundos;
}


setInterval(imprimeReloj, 1000);