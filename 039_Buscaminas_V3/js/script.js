function showArray(array) {
    let string = "";
    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            string += array[i].join(" ") + "\n";
        } else {
            string += array[i] + " ";
        }
    }
    return string;
}

function initBuscaminas(filas, columnas, minas) {
    if (minas > filas * columnas) {
        return alert("Introduzca un número de minas menor al de filas * columnas");
    }
    let arrayFinal = [];
    for (let i = 0; i < filas; i++) {
        let arrayAuxiliar = []; // Crear un nuevo array auxiliar para cada fila
        for (let j = 0; j < columnas; j++) {
            arrayAuxiliar[j] = 0; // Asignar un valor inicial, como 0 (vacío)
        }
        arrayFinal[i] = arrayAuxiliar; // Añadir el array auxiliar al array final
    }

    let minasColocadas = 0;
    while (minasColocadas < minas) {
        let fila = getRandomNumber(0, filas - 1);
        let columna = getRandomNumber(0, columnas - 1);
        if (arrayFinal[fila][columna] === "*") {
            continue;
        } else {
            arrayFinal[fila][columna] = "*";
            minasColocadas++;
            // Comprobación de las 8 direcciones, incluyendo diagonales.
            if ((fila + 1 < filas) && (arrayFinal[fila + 1][columna] != "*")) {
                arrayFinal[fila + 1][columna] += 1;
            }
            if ((fila - 1 >= 0) && (arrayFinal[fila - 1][columna] != "*")) {
                arrayFinal[fila - 1][columna] += 1;
            }
            if ((columna + 1 < columnas) && (arrayFinal[fila][columna + 1] != "*")) {
                arrayFinal[fila][columna + 1] += 1;
            }
            if ((columna - 1 >= 0) && (arrayFinal[fila][columna - 1] != "*")) {
                arrayFinal[fila][columna - 1] += 1;
            }

            // Diagonales
            if ((fila + 1 < filas) && (columna + 1 < columnas) && (arrayFinal[fila + 1][columna + 1] != "*")) {
                arrayFinal[fila + 1][columna + 1] += 1;
            }
            if ((fila + 1 < filas) && (columna - 1 >= 0) && (arrayFinal[fila + 1][columna - 1] != "*")) {
                arrayFinal[fila + 1][columna - 1] += 1;
            }
            if ((fila - 1 >= 0) && (columna + 1 < columnas) && (arrayFinal[fila - 1][columna + 1] != "*")) {
                arrayFinal[fila - 1][columna + 1] += 1;
            }
            if ((fila - 1 >= 0) && (columna - 1 >= 0) && (arrayFinal[fila - 1][columna - 1] != "*")) {
                arrayFinal[fila - 1][columna - 1] += 1;
            }
        }
    }

    return arrayFinal;
}

function getRandomNumber(min, max) {
    const random = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(random);

    return random;
}

let arr = initBuscaminas(7, 11, 15); // 7 filas, 11 columnas y 15 minas
document.getElementById("introducir").innerText = showArray(arr);