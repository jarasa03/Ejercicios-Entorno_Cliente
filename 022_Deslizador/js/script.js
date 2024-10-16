// Creo el input y el h1
let input_1 = document.createElement("input");
let h1_1 = document.createElement("h1");

// Les doy los atributos requeridos a cada cosa
input_1.setAttribute("type", "range");
input_1.setAttribute("min", "0");
input_1.setAttribute("max", "255");
input_1.setAttribute("value", "0");

// Le doy los estilos que me plazca a cada cosa
input_1.style.appearance = "none"; // Elimino el estilo por defecto
input_1.style.outline = "none";
input_1.style.border = "solid black 1px"
input_1.style.width = "300px";
input_1.style.height = "10px";
input_1.style.background = "linear-gradient(135deg, #8e2de2, #4a00e0, #ff6a00, #ff8e00)";
input_1.style.borderRadius = "5px";
input_1.style.position = "absolute";
input_1.style.top = "100px"

// Mi contenedor va a ser el body
let contenedor = document.querySelector("body");

// Meto las cosas al body
contenedor.appendChild(h1_1);
contenedor.appendChild(input_1);

// Valor por defecto en el h1
document.querySelector("h1").innerText = "0";

// La función
document.querySelector("input").oninput = function reflejarH1() {
    document.querySelector("h1").textContent = this.value;
}