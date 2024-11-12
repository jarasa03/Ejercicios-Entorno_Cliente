<<<<<<< HEAD
// Creo los divs
let div1 = document.createElement("div");
let div2 = document.createElement("div");
let div3 = document.createElement("div");

// Les doy un id a los divs
div1.setAttribute("id", "div1");
div2.setAttribute("id", "div2");
div3.setAttribute("id", "div3");

// Les doy color
div1.style.backgroundColor = "darkred";
div2.style.backgroundColor = "darkblue";
div3.style.backgroundColor = "darkorange";

// Les doy tamaño
div1.style.width = "50px";
div2.style.width = "50px";
div3.style.width = "50px";
div1.style.height = "30px";
div3.style.height = "30px";
div2.style.height = "30px";

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
div1.style.left = "25%"
div2.style.left = "50%"
div3.style.left = "75%"
    // Las tres propiedades de abajo las uso para poner en el centro de la coordenada del left
div1.style.transform = "translateX(-50%)"
div2.style.transform = "translateX(-50%)"
div3.style.transform = "translateX(-50%)"

// La función
document.getElementById("boton").onclick = function mover() {
    div1.style.top = Math.ceil(Math.random() * window.innerHeight) - 100 + "px";
    div1.style.left = Math.ceil(Math.random() * window.innerWidth) - 100 + "px";
    div2.style.top = Math.ceil(Math.random() * window.innerHeight) - 100 + "px";
    div2.style.left = Math.ceil(Math.random() * window.innerWidth) - 100 + "px";
    div3.style.top = Math.ceil(Math.random() * window.innerHeight) - 100 + "px";
    div3.style.left = Math.ceil(Math.random() * window.innerWidth) - 100 + "px";
=======
// Creo los divs
let div1 = document.createElement("div");
let div2 = document.createElement("div");
let div3 = document.createElement("div");

// Les doy un id a los divs
div1.setAttribute("id", "div1");
div2.setAttribute("id", "div2");
div3.setAttribute("id", "div3");

// Les doy color
div1.style.backgroundColor = "darkred";
div2.style.backgroundColor = "darkblue";
div3.style.backgroundColor = "darkorange";

// Les doy tamaño
div1.style.width = "50px";
div2.style.width = "50px";
div3.style.width = "50px";
div1.style.height = "30px";
div3.style.height = "30px";
div2.style.height = "30px";

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
div1.style.left = "25%"
div2.style.left = "50%"
div3.style.left = "75%"
    // Las tres propiedades de abajo las uso para poner en el centro de la coordenada del left
div1.style.transform = "translateX(-50%)"
div2.style.transform = "translateX(-50%)"
div3.style.transform = "translateX(-50%)"

// La función
document.getElementById("boton").onclick = function mover() {
    div1.style.top = Math.ceil(Math.random() * window.innerHeight) - 100 + "px";
    div1.style.left = Math.ceil(Math.random() * window.innerWidth) - 100 + "px";
    div2.style.top = Math.ceil(Math.random() * window.innerHeight) - 100 + "px";
    div2.style.left = Math.ceil(Math.random() * window.innerWidth) - 100 + "px";
    div3.style.top = Math.ceil(Math.random() * window.innerHeight) - 100 + "px";
    div3.style.left = Math.ceil(Math.random() * window.innerWidth) - 100 + "px";
>>>>>>> b9c93f9 (Primer commit desde VSCode)
}