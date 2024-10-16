// Creo los elementos
let textarea1 = document.createElement("textarea");
let textarea2 = document.createElement("textarea");
let decHex = document.createElement("input");
let hexDec = document.createElement("input");

// Doy atributos a lo que necesite
decHex.setAttribute("type", "button");
hexDec.setAttribute("type", "button");
decHex.setAttribute("value", "dec >> hex");
hexDec.setAttribute("value", "dec << hex");
decHex.setAttribute("id", "decHex");
hexDec.setAttribute("id", "hexDec");
textarea1.setAttribute("id", "textarea1");
textarea2.setAttribute("id", "textarea2");

// Doy los estilos que prefiera a cada cosa
textarea1.style.position = "absolute";
textarea2.style.position = "absolute";
decHex.style.position = "absolute";
hexDec.style.position = "absolute";
textarea1.style.top = "100px";
textarea2.style.top = "100px";
textarea1.style.left = "450px";
textarea2.style.left = "750px";
decHex.style.top = "100px";
decHex.style.left = "645px";
hexDec.style.top = "130px";
hexDec.style.left = "645px";
textarea1.style.height = "45px"
textarea2.style.height = "45px"

// Mi contenedor va a ser mi body
let contenedor = document.querySelector("body");

// Meto mis elementos a mi contenedor
contenedor.appendChild(textarea1);
contenedor.appendChild(textarea2);
contenedor.appendChild(decHex);
contenedor.appendChild(hexDec);

// Funciones
document.getElementById("decHex").onclick = function convertirDecHex() {
    let temp = BigInt(document.getElementById("textarea1").value).toString(16);
    document.getElementById("textarea2").value = temp;
}

document.getElementById("hexDec").onclick = function convertirHexDec() {
    let temp = BigInt("0x" + document.getElementById("textarea2").value);
    document.getElementById("textarea1").value = temp;
}