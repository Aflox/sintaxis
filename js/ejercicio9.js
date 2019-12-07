"use strict";

function fecha(d, m, y) {
    var dia = d.options[d.selectedIndex].value;
    var mes = m.options[m.selectedIndex].value;;
    var anyo = y.options[y.selectedIndex].value;
    var flocal = new Date(anyo, mes, dia);

    document.getElementById("ventana").innerHTML = flocal.toLocaleString();
}