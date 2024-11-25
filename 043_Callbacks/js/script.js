// Función para sumar dos números
function suma(x, y) {
    return x + y; // Devuelve la suma de x e y
}

// Función para restar dos números
function resta(x, y) {
    return x - y; // Devuelve la resta de x menos y
}

// Función para multiplicar dos números
function multiplica(x, y) {
    return x * y; // Devuelve el producto de x por y
}

// Función para dividir dos números
function divide(x, y) {
    return x / y; // Devuelve la división de x entre y
}

// Función principal que utiliza un callback para realizar la operación
function calc(callback, x, y) {
    return callback(x, y); // Llama al callback con los argumentos x e y y devuelve el resultado
}

// Agregar un evento "submit" al formulario identificado por "calc-form"
document.getElementById("calc-form").addEventListener("submit", function(e) {
    e.preventDefault(); // Evita que el formulario recargue la página al enviarse

    // Obtener los valores de los inputs
    const num1 = parseFloat(document.getElementById("num1").value); // Primer número
    const operacion = document.getElementById("operacion").value; // Operación seleccionada (suma, resta, etc.)
    const num2 = parseFloat(document.getElementById("num2").value); // Segundo número

    // Validar que los valores ingresados sean números
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("resultado").textContent = "Por favor, introduce números válidos."; // Mostrar error si los números no son válidos
        return; // Salir de la función
    }

    // Determinar la función de operación a utilizar según el valor de "operacion"
    let operacionCallback;
    switch (operacion) {
        case "suma": // Si la operación es "suma"
            operacionCallback = suma; // Asignar la función suma
            break;
        case "resta": // Si la operación es "resta"
            operacionCallback = resta; // Asignar la función resta
            break;
        case "multiplica": // Si la operación es "multiplica"
            operacionCallback = multiplica; // Asignar la función multiplica
            break;
        case "divide": // Si la operación es "divide"
            operacionCallback = divide; // Asignar la función divide
            break;
        default: // Si la operación no es válida
            document.getElementById("resultado").textContent = "Operación no válida."; // Mostrar mensaje de error
            return; // Salir de la función
    }

    // Llamar a la función calc con el callback seleccionado y los números
    const resultado = calc(operacionCallback, num1, num2);

    // Mostrar el resultado en el elemento con ID "resultado"
    document.getElementById("resultado").textContent = resultado;
});