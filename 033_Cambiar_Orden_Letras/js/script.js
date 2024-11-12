<<<<<<< HEAD
function swap(eliminar, n, m) {
    const array = eliminar.split(""); // Convertir la cadena en un array
    let string = ""; // String que almacenará lo que debemos imprimir

    let temp = array[n];
    array[n] = array[m];
    array[m] = temp;

    for (let i = 0; i < array.length; i++) {
        string += array[i];
    }

    return string;
}

document.getElementById("botoncito").addEventListener("click", () => {
    const textoActual = document.getElementById("escribir").value;
    document.getElementById("escribir").value = swap(textoActual, 0, 5);
=======
function swap(eliminar, n, m) {
    const array = eliminar.split(""); // Convertir la cadena en un array
    let string = ""; // String que almacenará lo que debemos imprimir

    let temp = array[n];
    array[n] = array[m];
    array[m] = temp;

    for (let i = 0; i < array.length; i++) {
        string += array[i];
    }

    return string;
}

document.getElementById("botoncito").addEventListener("click", () => {
    const textoActual = document.getElementById("escribir").value;
    document.getElementById("escribir").value = swap(textoActual, 0, 5);
>>>>>>> b9c93f9 (Primer commit desde VSCode)
});