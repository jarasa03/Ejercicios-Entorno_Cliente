// Definición de las funciones
function saludar() {
    document.getElementById("contenedor").innerHTML += `<p>Hola, soy ${this.nombre} y mi edad es ${this.edad}</p>`;
}

function saludarA(personaASaludar) {
    document.body.innerHTML += `<p>Hola ${personaASaludar.nombre}, mi nombre es ${this.nombre}</p>`;
}

function cumplirAnios() {
    this.edad++;
    if (this.edad > this.muerte) {
        this.morir();
    }
}

function iniciarTemporizador(persona) {
    persona.idTemporizador = setInterval(() => {
        persona.cumplirAnios();
    }, 1000); // Incrementar la edad cada segundo
}

function morir() {
    clearInterval(this.idTemporizador); // Detener el temporizador
    const boton = document.getElementById(`btn${this.nombre}`);
    if (boton) boton.remove(); // Eliminar el botón de la interfaz
    document.getElementById("contenedor").innerHTML += `<p>${this.nombre} ha fallecido a los ${this.edad} años.</p>`;
    delete this.nombre;
    delete this.edad;
    delete this.muerte;
    delete this.saludar;
    delete this.saludarA;
    delete this.cumplirAnios;
    delete this.idTemporizador;
}

function numeroAleatorio1_30() {
    return Math.floor(Math.random() * 30) + 1;
}

// Creación de objetos persona
const persona1 = {
    nombre: "Ana",
    edad: 0,
    saludar,
    saludarA,
    cumplirAnios,
    morir,
    actualizarBoton: (function () {
        let btn1 = document.createElement("button");
        btn1.id = "btnAna";
        btn1.value = "Ana";
        btn1.innerText = "Ana";
        document.getElementById("botones").appendChild(btn1);
    })(),
    muerte: numeroAleatorio1_30()
};

const persona2 = {
    nombre: "Javier",
    edad: 0,
    saludar,
    saludarA,
    cumplirAnios,
    morir,
    actualizarBoton: (function () {
        let btn2 = document.createElement("button");
        btn2.id = "btnJavier";
        btn2.value = "Javier";
        btn2.innerText = "Javier";
        document.getElementById("botones").appendChild(btn2);
    })(),
    muerte: numeroAleatorio1_30()
};

const persona3 = {
    nombre: "Ignacio",
    edad: 0,
    saludar,
    saludarA,
    cumplirAnios,
    morir,
    actualizarBoton: (function () {
        let btn3 = document.createElement("button");
        btn3.id = "btnIgnacio";
        btn3.value = "Ignacio";
        btn3.innerText = "Ignacio";
        document.getElementById("botones").appendChild(btn3);
    })(),
    muerte: numeroAleatorio1_30()
};

const persona4 = {
    nombre: "Erlin",
    edad: 0,
    saludar,
    saludarA,
    cumplirAnios,
    morir,
    actualizarBoton: (function () {
        let btn4 = document.createElement("button");
        btn4.id = "btnErlin";
        btn4.value = "Erlin";
        btn4.innerText = "Erlin";
        document.getElementById("botones").appendChild(btn4);
    })(),
    muerte: numeroAleatorio1_30()
};

// Llamadas a los métodos
document.getElementById("btnAna").addEventListener("click", () => {
    persona1.saludar();
});

document.getElementById("btnJavier").addEventListener("click", () => {
    persona2.saludar();
});

document.getElementById("btnIgnacio").addEventListener("click", () => {
    persona3.saludar();
});

document.getElementById("btnErlin").addEventListener("click", () => {
    persona4.saludar();
});

// Iniciar los temporizadores
iniciarTemporizador(persona1);
iniciarTemporizador(persona2);
iniciarTemporizador(persona3);
iniciarTemporizador(persona4);
