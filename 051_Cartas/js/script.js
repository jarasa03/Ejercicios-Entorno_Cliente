const tapete = document.querySelector("section");
const url_cartas = [
    "./img/applin.png",
    "./img/bronzor.png",
    "./img/buneary.png",
    "./img/colagrito.png",
    "./img/cottonee.png",
    "./img/dreepy.png",
    "./img/duskull.png",
    "./img/espeon.png",
    "./img/exeggutor.png",
    "./img/flareon.png",
    "./img/goldeen.png",
    "./img/hippopotas.png",
    "./img/jolteon.png",
    "./img/larvitar.png",
    "./img/litleo.png",
    "./img/miltank.png",
    "./img/pupitar.png",
    "./img/seaking.png",
    "./img/slowpoke.png",
    "./img/sneasel.png",
    "./img/sylveon.png",
    "./img/umbreon.png",
    "./img/ursaluna.png",
    "./img/vaporeon.png"
]
const cartas = [];

class Carta {

    constructor(url, id) {
        this.url = url;
        this.reverso_url = "../img/reverso.jpg";
        this.id = id;
    }

    pintarCarta() {
        let carta = document.createElement("input");
        carta.setAttribute("type", "button");
        carta.classList.add("carta", this.id);
        tapete.appendChild(carta);
    }

}

for (let index = 1; index <= 24; index++) {
    const carta1 = new Carta(url_cartas[index - 1], index)
    cartas.push(carta1);
    const carta2 = new Carta(url_cartas[index - 1], index)
    cartas.push(carta2);
}

cartas.sort(() => Math.random() - 0.5); // Desordeno el array

for (let index = 0; index <= cartas.length - 1; index++) {
    cartas[index].pintarCarta();
}

let primeraCarta = null; // Objeto de la primera carta seleccionada
let segundaCarta = null; // Objeto de la segunda carta seleccionada

document.querySelectorAll(".carta").forEach(function(input) {
    input.addEventListener("click", function() {
        const id = parseInt(this.classList[1]);
        const cartaObj = cartas.find(carta => carta.id === id); // Buscar el objeto con el ID correcto
        this.style.backgroundImage = `url('${cartaObj.url}')`;
        this.setAttribute("disabled", true);

        if (!primeraCarta) { // Si no hay primera carta seleccionada
            primeraCarta = { elemento: this, id };
        } else if (!segundaCarta) { // Si no hay segunda carta seleccionada
            segundaCarta = { elemento: this, id };
            if (primeraCarta.id === segundaCarta.id) {
                primeraCarta.elemento.classList.add("dorada");
                segundaCarta.elemento.classList.add("dorada");
                primeraCarta = null;
                segundaCarta = null;
            } else {

                // Deshabilitar todos los inputs
                document.querySelectorAll(".carta").forEach(function(input) {
                    input.setAttribute("disabled", true);
                });

                setTimeout(() => {

                    primeraCarta.elemento.style.backgroundImage = "url('./img/reverso.jpg')";
                    primeraCarta.elemento.removeAttribute("disabled");
                    segundaCarta.elemento.style.backgroundImage = "url('./img/reverso.jpg')";
                    segundaCarta.elemento.removeAttribute("disabled");

                    // Habilitar todos los inputs de nuevo
                    document.querySelectorAll(".carta").forEach(function(input) {
                        input.removeAttribute("disabled");
                    });

                    primeraCarta = null;
                    segundaCarta = null;
                }, 1500);
            }
        }
    });
});