function unique(eliminar) {
    const array = eliminar.split(""); // Convertir la cadena en un array
    let string = ""; // String que almacenará los caracteres únicos

    // Recorremos cada carácter del array
    for (let i = 0; i < array.length; i++) {
        if (!string.includes(array[i])) { // Si el carácter no está en `string`, lo añadimos
            string += array[i];
        }
    }

    return string;
}



document.getElementById("botoncito").addEventListener("click", () => {
    const textoActual = document.getElementById("escribir").value;
    document.getElementById("escribir").value = unique(textoActual);
});