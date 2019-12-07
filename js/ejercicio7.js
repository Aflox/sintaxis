"use strict"

var hoy = new Date(), diasres = new Date(hoy.getFullYear(), 11, 25);
var contador = 0, fsemana = 0, finde = false;

if (hoy.getTime() >= diasres.getTime()) {
    diasres = Date((hoy.getFullYear() + 1), 11, 25);
}

while (hoy.getTime() < diasres.getTime()) {
    contador++;
    if ((hoy.getDay() == 0 || hoy.getDay() == 6) && !finde) {
        finde = true;
        fsemana++;
    } else if (hoy.getDay() == 1) {
        finde = false;
    }

    hoy.setDate(hoy.getDate() + 1);

}

document.write("Quedan " + contador + " días hasta Navidad entre ellos " + fsemana + " fines de semana.");