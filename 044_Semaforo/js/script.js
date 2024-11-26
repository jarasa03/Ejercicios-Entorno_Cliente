let coche1 = document.getElementById("coche1");
let patomovil = document.getElementById("elmejorcochedelahistoria");
let semaforo = document.getElementById("semaforo");
let intervalo;
let intervalo2;
let posicionXCoche1 = 0;
let posicionXPatoMovil = 0;
let velocidadCoche1 = 15;
let velocidadPatoMovil = 20;

semaforo.addEventListener("click", () => {
    // Obtener el color actual, ya sea inline o definido por CSS
    const colorActual = getComputedStyle(semaforo).backgroundColor;

    // Cambiar el color según el valor actual
    if (colorActual === "rgb(144, 238, 144)") { // 'lightgreen' en formato RGB
        semaforo.style.backgroundColor = "red";
    } else {
        semaforo.style.backgroundColor = "lightgreen";
        moverCoche(velocidadCoche1);
        moverCoche(velocidadPatoMovil);
    }
});


function moverCoche(velocidad) {
    if (velocidad === velocidadCoche1) {
        clearInterval(intervalo); // Limpio el intervalo para que no es incremente la velocidad de manera infinita
        intervalo = setInterval(() => {
            if (posicionXCoche1 >= window.innerWidth) {
                posicionXCoche1 = 0 - (coche1.offsetWidth);
            } else {
                posicionXCoche1 += velocidad;
                coche1.style.transform = `translateX(${posicionXCoche1}px)`;
            }
            pararCoche(posicionXCoche1, intervalo);
        }, 50);
    }
    if (velocidad === velocidadPatoMovil) {
        intervalo2 = setInterval(() => {
            if (posicionXPatoMovil >= window.innerWidth) {
                posicionXPatoMovil = 0 - (patomovil.offsetWidth);
            } else {
                posicionXPatoMovil += velocidad;
                patomovil.style.transform = `translateX(${posicionXPatoMovil}px)`;
            }
            pararCoche(posicionXPatoMovil, intervalo2);
        }, 50);
    }
}

function pararCoche(posicionCoche, intervalo) {
    if (semaforo.style.backgroundColor === "red") {
        if ((semaforo.offsetLeft > posicionCoche) && (posicionCoche > semaforo.offsetLeft - 130)) {
            clearInterval(intervalo);
        }
    }
}

moverCoche(velocidadCoche1);
moverCoche(velocidadPatoMovil);