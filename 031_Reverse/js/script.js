<<<<<<< HEAD
function reverse(revertir) {
    return revertir.split("").reverse().join(""); // Invertir caracteres, no palabras
};

document.getElementById("botoncito").addEventListener("click", () => {
    // Obtiene el valor actual, lo invierte y lo establece de nuevo en el campo
    const textoActual = document.getElementById("escribir").value;
    document.getElementById("escribir").value = reverse(textoActual);
});

// function reverse2(revertir) {
//     let palabra = "";
//     for (let i = (revertir.length - 1); i <= 0; i--) {
//         palabra += revertir[i];
//     }
//     return palabra; // Invertir caracteres, no palabras
=======
function reverse(revertir) {
    return revertir.split("").reverse().join(""); // Invertir caracteres, no palabras
};

document.getElementById("botoncito").addEventListener("click", () => {
    // Obtiene el valor actual, lo invierte y lo establece de nuevo en el campo
    const textoActual = document.getElementById("escribir").value;
    document.getElementById("escribir").value = reverse(textoActual);
});

// function reverse2(revertir) {
//     let palabra = "";
//     for (let i = (revertir.length - 1); i <= 0; i--) {
//         palabra += revertir[i];
//     }
//     return palabra; // Invertir caracteres, no palabras
>>>>>>> b9c93f9 (Primer commit desde VSCode)
// };