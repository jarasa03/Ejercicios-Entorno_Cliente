<<<<<<< HEAD
// Zona de declaración de variables
let tabla = document.createElement("table"); // Creo la tabla
let maxVerti = 21;
let maxHori = 47;

// Creo la estructuras de td y tr dentro de la tabla
for (let index = 0; index < maxVerti; index++) {
    let fila = document.createElement("tr"); // Crear una fila
    for (let index2 = 0; index2 < maxHori; index2++) {
        let celda = document.createElement("td"); // Crear una celda
        // Estilo de cada celda
        celda.style.border = "1px solid black";
        celda.style.height = "30px";
        celda.style.width = "30px";
        celda.style.backgroundColor = "red";
        fila.appendChild(celda); // Añadir la celda a la fila
        celda.onmouseenter = function() {
            this.style.backgroundColor = randomColor();
        };
    }
    tabla.appendChild(fila); // Añadir la fila a la tabla
}

// Estilos de la tabla
tabla.style.borderCollapse = "collapse";

// Mi contenedor va a ser el body
let contenedor = document.querySelector("body");

// Meto lo que quiero meter al body
contenedor.appendChild(tabla);

// La función
function randomColor() { // Función para color aleatorio
    return "rgb(" +
        Math.ceil(Math.random() * 255) + ", " +
        Math.ceil(Math.random() * 255) + ", " +
        Math.ceil(Math.random() * 255) + ")";
=======
// Zona de declaración de variables
let tabla = document.createElement("table"); // Creo la tabla
let maxVerti = 21;
let maxHori = 47;

// Creo la estructuras de td y tr dentro de la tabla
for (let index = 0; index < maxVerti; index++) {
    let fila = document.createElement("tr"); // Crear una fila
    for (let index2 = 0; index2 < maxHori; index2++) {
        let celda = document.createElement("td"); // Crear una celda
        // Estilo de cada celda
        celda.style.border = "1px solid black";
        celda.style.height = "30px";
        celda.style.width = "30px";
        celda.style.backgroundColor = "red";
        fila.appendChild(celda); // Añadir la celda a la fila
        celda.onmouseenter = function() {
            this.style.backgroundColor = randomColor();
        };
    }
    tabla.appendChild(fila); // Añadir la fila a la tabla
}

// Estilos de la tabla
tabla.style.borderCollapse = "collapse";

// Mi contenedor va a ser el body
let contenedor = document.querySelector("body");

// Meto lo que quiero meter al body
contenedor.appendChild(tabla);

// La función
function randomColor() { // Función para color aleatorio
    return "rgb(" +
        Math.ceil(Math.random() * 255) + ", " +
        Math.ceil(Math.random() * 255) + ", " +
        Math.ceil(Math.random() * 255) + ")";
>>>>>>> b9c93f9 (Primer commit desde VSCode)
}