const persona1 = {
    nombre: "Ana",
    edad: 22,
    saludar,
    saludarA,
    cumplirAnios
};

const persona2 = {
    nombre: "Javier",
    edad: 21,
    saludar,
    saludarA,
    cumplirAnios
};

const persona3 = {
    nombre: "Ignacio",
    edad: 18,
    saludar,
    saludarA,
    cumplirAnios
};

const persona4 = {
    nombre: "Erlin",
    edad: 25,
    saludar,
    saludarA,
    cumplirAnios
};

function saludar() {
    document.body.innerHTML += `<p>Hola, soy ${this.nombre} y mi edad es ${this.edad}</p>`;
}

function saludarA(personaASaludar) {
    document.body.innerHTML += `<p>Hola ${personaASaludar.nombre}, mi nombre es ${this.nombre}</p>`;
}

function cumplirAnios() {
    this.edad++;
}

// Llamadas a los métodos
persona1.saludar();
persona2.saludar();
persona3.saludar();
persona4.saludar();

persona1.saludarA(persona2);
persona3.saludarA(persona4);

persona1.cumplirAnios();
persona2.cumplirAnios();

persona1.saludar();
persona2.saludar();
persona3.saludar();
persona4.saludar();
