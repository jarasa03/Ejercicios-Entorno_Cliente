<<<<<<< HEAD
function mess(desordenar) {
    const array = desordenar.split(""); // Convertir la cadena en un array

    // Mezclar el array usando Fisher-Yates Shuffle
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); // Índice aleatorio entre 0 e i
        // Intercambiar los elementos array[i] y array[j]
        [array[i], array[j]] = [array[j], array[i]];
    }

    return array.join(""); // Convertir el array mezclado de nuevo a cadena
}

document.getElementById("botoncito").addEventListener("click", () => {
    const textoActual = document.getElementById("escribir").value;
    document.getElementById("escribir").value = mess(textoActual);
});
=======
function mess(desordenar) {
    const array = desordenar.split(""); // Convertir la cadena en un array

    // Mezclar el array usando Fisher-Yates Shuffle
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); // Índice aleatorio entre 0 e i
        // Intercambiar los elementos array[i] y array[j]
        [array[i], array[j]] = [array[j], array[i]];
    }

    return array.join(""); // Convertir el array mezclado de nuevo a cadena
}

document.getElementById("botoncito").addEventListener("click", () => {
    const textoActual = document.getElementById("escribir").value;
    document.getElementById("escribir").value = mess(textoActual);
});
>>>>>>> b9c93f9 (Primer commit desde VSCode)
