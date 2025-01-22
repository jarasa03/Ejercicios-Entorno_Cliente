class SerVivo {
    constructor(fechaNac) {
        this.fechaNac = fechaNac;
    }

    alimentarse(nombreAlimento) {
        return "(" + this.fechaNac + "): Que rico el " + nombreAlimento;
    }
}

class Animal extends SerVivo {
    constructor(numPatas, fechaNac) {
        super(fechaNac);
        this.numPatas = numPatas;
    }

    desplazarse(km) {
        return "(" + this.fechaNac + "): Me he desplazado " + km;
    }
}

class Humano extends Animal {
    constructor(nombre, numPatas, fechaNac) {
        super(numPatas, fechaNac);
        this.nombre = nombre;
    }

    verFutbol() {
        return this.nombre + " (" + this.fechaNac + "): Qué partidazo!"
    }
}

class SuperMan extends Humano {
    constructor(nombre, numPatas, fechaNac) {
        super(nombre, numPatas, fechaNac)
    }

    volar() {
        return this.nombre + " (" + this.fechaNac + "): Estoy volando siuuuu"
    }
}

const rigoberto = new Humano("Rigoberto", "2", "1/1/2007");

console.log(rigoberto.alimentarse("rabo de toro"));
console.log(rigoberto.desplazarse("2 km"));
console.log(rigoberto.verFutbol());

try {
    rigoberto.volar();
} catch {
    console.log("El humano no puede volar")
}

const pabloMotos = new SuperMan("Pablo Motos", "2", "5/4/1988");