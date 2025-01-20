function saludar() {
    document.getElementById("contenedor").innerHTML += `<p>Hola, soy ${this.nombre} y mi edad es ${this.edad}</p>`;
}

function saludarA(personaASaludar) {
    document.body.innerHTML += `<p>Hola ${personaASaludar.nombre}, mi nombre es ${this.nombre}</p>`;
}

function cumplirAnios() {
    this.edad++;
}

function iniciarTemporizador(persona) {
    setInterval(() => {
        persona.cumplirAnios();
    }, 1000); // Para incrementar la edad cada segundo
}

const persona1 = {
    nombre: "Ana",
    edad: 22,
    saludar,
    saludarA,
    cumplirAnios,
    actualizarBoton: (function() {
        // Crear el botón y asignar el id y el valor
        let btn1 = document.createElement("button");
        btn1.id = "btn1";
        btn1.value = "Ana";
        btn1.innerText = "Ana";
        document.getElementById("botones").appendChild(btn1);
    })(),
};

const persona2 = {
    nombre: "Javier",
    edad: 21,
    saludar,
    saludarA,
    cumplirAnios,
    actualizarBoton: (function() {
        // Crear el botón y asignar el id y el valor
        let btn2 = document.createElement("button");
        btn2.id = "btn2";
        btn2.value = "Javier";
        btn2.innerText = "Javier";
        document.getElementById("botones").appendChild(btn2);
    })(),
};

const persona3 = {
    nombre: "Ignacio",
    edad: 18,
    saludar,
    saludarA,
    cumplirAnios,
    actualizarBoton: (function() {
        // Crear el botón y asignar el id y el valor
        let btn3 = document.createElement("button");
        btn3.id = "btn3";
        btn3.value = "Ignacio";
        btn3.innerText = "Ignacio";
        document.getElementById("botones").appendChild(btn3);
    })(),
};

const persona4 = {
    nombre: "Erlin",
    edad: 25,
    saludar,
    saludarA,
    cumplirAnios,
    actualizarBoton: (function() {
        // Crear el botón y asignar el id y el valor
        let btn4 = document.createElement("button");
        btn4.id = "btn4";
        btn4.value = "Erlin";
        btn4.innerText = "Erlin";
        document.getElementById("botones").appendChild(btn4);
    })(),
};

// Llamadas a los métodos
document.getElementById("btn1").addEventListener("click", () => {
    persona1.saludar()
})

document.getElementById("btn2").addEventListener("click", () => {
    persona2.saludar()
})

document.getElementById("btn3").addEventListener("click", () => {
    persona3.saludar()
})

document.getElementById("btn4").addEventListener("click", () => {
    persona4.saludar()
})

iniciarTemporizador(persona1);
iniciarTemporizador(persona2);
iniciarTemporizador(persona3);
iniciarTemporizador(persona4);