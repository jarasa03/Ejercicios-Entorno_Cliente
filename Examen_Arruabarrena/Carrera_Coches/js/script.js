const boton = document.getElementById("start");

const cocheRojo = document.getElementById("cocheRojo");
const cocheAmarillo = document.getElementById("cocheAmarillo");
const cocheAzul = document.getElementById("cocheAzul");

let posicionXRojo = 10;
let posicionXAmarillo = 10;
let posicionXAzul = 10;

let intervaloRojo, intervaloAmarillo, intervaloAzul;

boton.addEventListener("click", () => {
    boton.disabled = true; // Deshabilito el botón durante la carrera

    const [velocidadRojo, velocidadAmarillo, velocidadAzul] = generarVelocidadesUnicas(3, 7);

    moverCoche("Rojo", velocidadRojo);
    moverCoche("Amarillo", velocidadAmarillo);
    moverCoche("Azul", velocidadAzul);
});

function moverCoche(coche, velocidad) {
    const meta = 500;

    if (coche === "Rojo") {
        intervaloRojo = setInterval(() => {
            posicionXRojo += velocidad;
            cocheRojo.style.transform = `translateX(${posicionXRojo}px)`;

            if (posicionXRojo >= meta) {
                terminarCarrera("rojo");
            }
        }, 50);
    } else if (coche === "Amarillo") {
        intervaloAmarillo = setInterval(() => {
            posicionXAmarillo += velocidad;
            cocheAmarillo.style.transform = `translateX(${posicionXAmarillo}px)`;

            if (posicionXAmarillo >= meta) {
                terminarCarrera("amarillo");
            }
        }, 50);
    } else if (coche === "Azul") {
        intervaloAzul = setInterval(() => {
            posicionXAzul += velocidad;
            cocheAzul.style.transform = `translateX(${posicionXAzul}px)`;

            if (posicionXAzul >= meta) {
                terminarCarrera("azul");
            }
        }, 50);
    }
}

function terminarCarrera(ganador) {
    clearInterval(intervaloRojo);
    clearInterval(intervaloAmarillo);
    clearInterval(intervaloAzul);

    alert(`¡Ha ganado el coche ${ganador}!`);

    boton.disabled = false; // Habilito el botón de nuevo

    // Reinicio posiciones de los coches
    posicionXRojo = 10;
    posicionXAmarillo = 10;
    posicionXAzul = 10;

    cocheRojo.style.transform = `translateX(${posicionXRojo}px)`;
    cocheAmarillo.style.transform = `translateX(${posicionXAmarillo}px)`;
    cocheAzul.style.transform = `translateX(${posicionXAzul}px)`;
}

// Genero 3 velocidades únicas en el rango especificado
function generarVelocidadesUnicas(min, max) {
    const velocidades = [];

    while (velocidades.length < 3) {
        const velocidad = Number((Math.random() * (max - min) + min).toFixed(2));

        // Solo añado la velocidad si no está ya en el array
        if (!velocidades.includes(velocidad)) {
            velocidades.push(velocidad);
        }
    }

    return velocidades;
}