// Datos para crear las etiquetas e inputs
const elementos = [ // Array de todos mis ids y labels
    { id: "place1", label: "Blur" },
    { id: "place2", label: "Contrast" },
    { id: "place3", label: "Brightness" },
    { id: "place4", label: "Saturation" },
    { id: "place5", label: "Hue" },
    { id: "place6", label: "Sepia" },
    { id: "place7", label: "Invert" },
];

// Creo cada cosa
const img = document.createElement("img");
img.setAttribute("src", "Chupa_Chups_logo.png"); // Link de la imagen
img.style.width = "500px"; // Le doy tamaño
img.style.position = "absolute";
img.style.left = "50%"; // Siempre centrado respecto al ancho de la ventana
img.style.top = "50%"; // Siempre centrado respecto al alto de la ventana
img.style.transform = "translate(-50%, -50%)"; // Centrado respecto a su centro

// Creo mi contenedor, en mi caso el body
const contenedor = document.querySelector("body");

// Introduzco la imagen al contenedor
contenedor.appendChild(img);

// Itero sobre el array para crear inputs y labels
elementos.forEach((elemento) => {
    const inputContainer = document.createElement("div"); // Contenedor para cada par
    const input = document.createElement("input");
    const label = document.createElement("label");

    // Doy atributos a cada input y label
    input.setAttribute("type", "range");
    input.setAttribute("id", elemento.id);
    input.setAttribute("value", "0"); // Doy valor inicial 0
    input.setAttribute("min", "0"); // Doy mínimo 0
    input.setAttribute("max", "100"); // Doy máximo 100
    label.setAttribute("for", elemento.id);
    label.innerText = elemento.label;

    // Aplico estilos
    label.style.marginRight = "10px"; // Separación a la derecha del label

    // Agrego el label y el input al contenedor del par
    inputContainer.appendChild(label);
    inputContainer.appendChild(input);

    // Doy posición a los ranges usando display: flex
    inputContainer.style.display = "flex";
    inputContainer.style.alignItems = "center"; // Alinear verticalmente
    input.style.marginLeft = "100px"; // Separación entre cada par
    inputContainer.style.position = "relative"; // Hacer que el contenedor sea relativo

    // Fijo la altura del input
    input.style.height = "20px"; // Ajusta esta altura según sea necesario
    input.style.position = "absolute"; // Cambiamos la posición del input
    input.style.top = "50%"; // Posicionar verticalmente al centro
    input.style.transform = "translateY(-50%)"; // Ajustar para que esté centrado

    // Agrego el contenedor de par al contenedor principal
    contenedor.appendChild(inputContainer);
});

// Zona de funciones
// Función para aplicar todos los filtros
function aplicarFiltros() {
    const blur = document.getElementById("place1").value + "px";
    const contrast = (1 - (document.getElementById("place2").value * 0.01));
    const brightness = (1 - (document.getElementById("place3").value * 0.01));
    const saturate = (1 - (document.getElementById("place4").value * 0.01));
    const hue = (document.getElementById("place5").value * 3.6) + "deg";
    const sepia = (document.getElementById("place6").value * 0.01);
    const invert = (document.getElementById("place7").value * 0.01);

    document.querySelector("img").style.filter = `
        blur(${blur}) 
        contrast(${contrast}) 
        brightness(${brightness}) 
        saturate(${saturate}) 
        hue-rotate(${hue}) 
        sepia(${sepia}) 
        invert(${invert})`;
}

elementos.forEach((elemento) => {
    document.getElementById(elemento.id).addEventListener("input", aplicarFiltros);
});