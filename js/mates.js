var nombre_del_usuario = window.prompt("Introduce tu nombre:", "");
window.alert("Bienvenido, " + nombre_del_usuario);

function mediaAritmetica() {
    var valores = 0;
    for (let i = 0; i < 3; i++) {
        valores += parseInt(window.prompt("Introduce un valor:"));
    }

    window.alert("La media aritmética de los números introducidos es " + valores / 3);
}

function operaciones() {
    var num1, num2;

    num1 = parseInt(window.prompt("Introduce el primer número:"));
    num2 = parseInt(window.prompt("Introduce el segundo número:"));

    document.write("La suma de ambos números es: " + (num1 + num2) + "<br>");
    document.write("La resta de ambos números es: " + (num1 - num2) + "<br>");
    document.write("La multiplicación de ambos números es: " + num1 * num2 + "<br>");
    document.write("La división de ambos números es: " + num1 / num2 + "<br>");
    document.write("El módulo de ambos números es: " + num1 % num2 + "<br>");
}

function notas() {
    var nombre, apellidos, nota1, nota2;

    nombre = window.prompt("Introduce el nombre del usuario:");
    apellidos = window.prompt("Introduce los apellidos del usuario:");
    nota1 = parseInt(window.prompt("Introduce la nota del 1er parcial:"));
    nota2 = parseInt(window.prompt("Introduce la nota del 2º parcial:"));

    document.write(apellidos.toUpperCase() + ", " + nombre.toUpperCase() + "............." + nota1 + " | " + nota2 + " | " + ((nota1 * 0.6) + (nota2 * 0.4)));

}

function pi() {
    var decimales;

    decimales = parseInt(window.prompt("¿Cuantos decimales quieres ver?"));

    document.write("El número PI con " + decimales + " decimales es: " + Math.PI.toFixed(decimales));
}