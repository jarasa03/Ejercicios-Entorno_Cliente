<<<<<<< HEAD
// Creo todo
let div_1 = document.createElement("div");
let select = document.createElement("select");
let rojo = document.createElement("option");
let verde = document.createElement("option");
let azul = document.createElement("option");
let naranja = document.createElement("option");
let negro = document.createElement("option");
let amarillo = document.createElement("option");

// Le doy atributos a cada opcion
rojo.value = "red";
verde.value = "green";
azul.value = "blue";
naranja.value = "orange";
negro.value = "black";
amarillo.value = "yellow";

// Doy texto a cada opción
rojo.innerText = "rojo";
verde.innerText = "verde";
azul.innerText = "azul";
naranja.innerText = "naranja";
negro.innerText = "negro";
amarillo.innerText = "amarillo";

// Doy estilos a cada cosa
select.style.position = "absolute";
select.style.top = "200px"
div_1.style.width = "150px"
div_1.style.height = "150px"
div_1.style.backgroundColor = "lightcoral" // Color por defecto

// Mi primer contenedor va a ser el body
let contenedor = document.querySelector("body");

// Introduzco las cosas en el documento
contenedor.appendChild(div_1);
contenedor.appendChild(select);
select.appendChild(rojo);
select.appendChild(verde);
select.appendChild(azul);
select.appendChild(naranja);
select.appendChild(negro);
select.appendChild(amarillo);

// Función
document.querySelector("select").onchange = function cambiarColor() {
    div_1.style.backgroundColor = document.querySelector("select").value;
=======
// Creo todo
let div_1 = document.createElement("div");
let select = document.createElement("select");
let rojo = document.createElement("option");
let verde = document.createElement("option");
let azul = document.createElement("option");
let naranja = document.createElement("option");
let negro = document.createElement("option");
let amarillo = document.createElement("option");

// Le doy atributos a cada opcion
rojo.value = "red";
verde.value = "green";
azul.value = "blue";
naranja.value = "orange";
negro.value = "black";
amarillo.value = "yellow";

// Doy texto a cada opción
rojo.innerText = "rojo";
verde.innerText = "verde";
azul.innerText = "azul";
naranja.innerText = "naranja";
negro.innerText = "negro";
amarillo.innerText = "amarillo";

// Doy estilos a cada cosa
select.style.position = "absolute";
select.style.top = "200px"
div_1.style.width = "150px"
div_1.style.height = "150px"
div_1.style.backgroundColor = "lightcoral" // Color por defecto

// Mi primer contenedor va a ser el body
let contenedor = document.querySelector("body");

// Introduzco las cosas en el documento
contenedor.appendChild(div_1);
contenedor.appendChild(select);
select.appendChild(rojo);
select.appendChild(verde);
select.appendChild(azul);
select.appendChild(naranja);
select.appendChild(negro);
select.appendChild(amarillo);

// Función
document.querySelector("select").onchange = function cambiarColor() {
    div_1.style.backgroundColor = document.querySelector("select").value;
>>>>>>> b9c93f9 (Primer commit desde VSCode)
}