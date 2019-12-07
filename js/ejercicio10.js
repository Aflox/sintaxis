"use strict"
//Por qué no imprime por pantalla para poder continuar.

var hoy = new Date();

function fecha(factual) {

    factual.innerHTML = hoy.toLocaleDateString();
}

function fechaMod(valor, factual) {
    var num = valor.value;

    hoy.setDate((hoy.getDate() + parseInt(num)));

    factual.innerHTML = hoy.toLocaleDateString();
}