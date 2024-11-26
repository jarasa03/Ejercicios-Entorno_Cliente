// Zona de declaración de variables
let tabla = "";
let contador = 0; // Contador para el primer bucle
let contador2 = 1; // Contador para el segundo bucle
let contador3;
let contador4 = 0;

for (let index = 0; index < 11; index++) { // Bucle para los tr
    tabla += "<tr></tr>";
    contador3 = index; // Reiniciar contador3 para cada fila
    for (let index2 = 0; index2 < 11; index2++) { // Bucle para los td
        contador4 = index2 - 1;
        if (index2 === 0) {
            if (contador === 0) {
                tabla += "<th>x</th>";

            } else {
                tabla += "<th>" + contador + "</th>";
            }
            contador++;
        } else if (index === 0) {
            tabla += "<th>" + contador2 + "</th>";
            contador2++;
        } else {
            contador4++;
            tabla += "<td>" + (contador3 * contador4) + "</td>";
        }
    }

}

document.getElementById("tabla").innerHTML = tabla;