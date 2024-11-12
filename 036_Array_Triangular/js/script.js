<<<<<<< HEAD
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

function creaArrayTriangular(filas) {
    let arrayTriangular = [];

    for (let i = 0; i < filas; i++) {
        let arrayAuxiliar = []; // Crear un nuevo array auxiliar para cada fila
        for (let j = 0; j <= i; j++) {
            arrayAuxiliar[j] = j + 1; // Asignar el valor a cada elemento de la fila
        }
        arrayTriangular[i] = arrayAuxiliar; // Añadir el array auxiliar al array triangular
    }

    return arrayTriangular;
}

let x = creaArrayTriangular(4);
=======
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

function creaArrayTriangular(filas) {
    let arrayTriangular = [];

    for (let i = 0; i < filas; i++) {
        let arrayAuxiliar = []; // Crear un nuevo array auxiliar para cada fila
        for (let j = 0; j <= i; j++) {
            arrayAuxiliar[j] = j + 1; // Asignar el valor a cada elemento de la fila
        }
        arrayTriangular[i] = arrayAuxiliar; // Añadir el array auxiliar al array triangular
    }

    return arrayTriangular;
}

let x = creaArrayTriangular(4);
>>>>>>> b9c93f9 (Primer commit desde VSCode)
document.getElementById("introducir").innerText = showArray(x);