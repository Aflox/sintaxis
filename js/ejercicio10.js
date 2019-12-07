"use strict";

var hoy = new Date();

function fecha(factual){

    factual.innerHTML = hoy.toLocaleDateString();
}

function fechaMod(valor, factual){
    var num = valor.value;

    hoy.setDate((hoy.getDate()+parseInt));

    factual.innerHTML = hoy.toLocaleDateString();
}