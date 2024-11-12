<<<<<<< HEAD
// Creo los divs
let div1 = document.createElement("div");
let div2 = document.createElement("div");
let div3 = document.createElement("div");

// Les doy un id a los divs
div1.setAttribute("id", "div1");
div2.setAttribute("id", "div2");
div3.setAttribute("id", "div3");

// Les doy un color
div1.style.backgroundColor = "red";
div2.style.backgroundColor = "yellow";
div3.style.backgroundColor = "red";

// Les doy tamaño
div1.style.width = "400px";
div2.style.width = "400px";
div3.style.width = "400px";
div1.style.height = "50px";
div2.style.height = "100px";
div3.style.height = "50px";

// Mi contenedor va a ser el body
let contenedor = document.querySelector("body");

// Meto los divs al body
contenedor.appendChild(div1);
contenedor.appendChild(div2);
contenedor.appendChild(div3);

// Les doy una posición a los divs
div1.style.position = "absolute";
div2.style.position = "absolute";
div3.style.position = "absolute";
div1.style.top = "200px";
div2.style.top = "250px";
div3.style.top = "350px";
div1.style.left = "50%";
div2.style.left = "50%";
div3.style.left = "50%";
div1.style.transform = "translateX(-50%)" // Para que estén al 50% respecto a su centro
div2.style.transform = "translateX(-50%)" // Para que estén al 50% respecto a su centro
div3.style.transform = "translateX(-50%)" // Para que estén al 50% respecto a su centro

// Funciones
document.getElementById("div1").onclick = function randomColor() {
    div1.style.backgroundColor = "rgb(" +
        Math.ceil(Math.random() * 255) + ", " +
        Math.ceil(Math.random() * 255) + ", " +
        Math.ceil(Math.random() * 255) + ")";
}
document.getElementById("div2").onclick = function randomColor() {
    div2.style.backgroundColor = "rgb(" +
        Math.ceil(Math.random() * 255) + ", " +
        Math.ceil(Math.random() * 255) + ", " +
        Math.ceil(Math.random() * 255) + ")";
}
document.getElementById("div3").onclick = function randomColor() {
    div3.style.backgroundColor = "rgb(" +
        Math.ceil(Math.random() * 255) + ", " +
        Math.ceil(Math.random() * 255) + ", " +
        Math.ceil(Math.random() * 255) + ")";
=======
// Creo los divs
let div1 = document.createElement("div");
let div2 = document.createElement("div");
let div3 = document.createElement("div");

// Les doy un id a los divs
div1.setAttribute("id", "div1");
div2.setAttribute("id", "div2");
div3.setAttribute("id", "div3");

// Les doy un color
div1.style.backgroundColor = "red";
div2.style.backgroundColor = "yellow";
div3.style.backgroundColor = "red";

// Les doy tamaño
div1.style.width = "400px";
div2.style.width = "400px";
div3.style.width = "400px";
div1.style.height = "50px";
div2.style.height = "100px";
div3.style.height = "50px";

// Mi contenedor va a ser el body
let contenedor = document.querySelector("body");

// Meto los divs al body
contenedor.appendChild(div1);
contenedor.appendChild(div2);
contenedor.appendChild(div3);

// Les doy una posición a los divs
div1.style.position = "absolute";
div2.style.position = "absolute";
div3.style.position = "absolute";
div1.style.top = "200px";
div2.style.top = "250px";
div3.style.top = "350px";
div1.style.left = "50%";
div2.style.left = "50%";
div3.style.left = "50%";
div1.style.transform = "translateX(-50%)" // Para que estén al 50% respecto a su centro
div2.style.transform = "translateX(-50%)" // Para que estén al 50% respecto a su centro
div3.style.transform = "translateX(-50%)" // Para que estén al 50% respecto a su centro

// Funciones
document.getElementById("div1").onclick = function randomColor() {
    div1.style.backgroundColor = "rgb(" +
        Math.ceil(Math.random() * 255) + ", " +
        Math.ceil(Math.random() * 255) + ", " +
        Math.ceil(Math.random() * 255) + ")";
}
document.getElementById("div2").onclick = function randomColor() {
    div2.style.backgroundColor = "rgb(" +
        Math.ceil(Math.random() * 255) + ", " +
        Math.ceil(Math.random() * 255) + ", " +
        Math.ceil(Math.random() * 255) + ")";
}
document.getElementById("div3").onclick = function randomColor() {
    div3.style.backgroundColor = "rgb(" +
        Math.ceil(Math.random() * 255) + ", " +
        Math.ceil(Math.random() * 255) + ", " +
        Math.ceil(Math.random() * 255) + ")";
>>>>>>> b9c93f9 (Primer commit desde VSCode)
}