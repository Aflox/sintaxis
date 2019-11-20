"use strict";

function getSundays(){
    var d;

    for(let year = 2014; year <= 2050; year++) {
        d = new Date(year,0,1);

        if(d.getDay()===0){
            document.write("1 de enero es un domingo en "+year+"</br>");
        }
    }
}

getSundays();