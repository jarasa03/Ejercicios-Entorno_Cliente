const crear = document.getElementById("crear");
const tapete = document.getElementById("tapete");
const elegir = document.getElementById("elegir");

function dado(numCaras = 6) {
    this.numCaras = numCaras;
    this.dadillo = document.createElement("input");
    this.dadillo.setAttribute("type", "button");
    this.dadillo.setAttribute("class", "dado");
    this.dadillo.setAttribute("value", this.lanzar());
    tapete.appendChild(this.dadillo);
    this.dadillo.addEventListener("click", () => {
        this.dadillo.setAttribute("value", this.lanzar());
    });
}

dado.prototype.lanzar = function() {
    return Math.floor(Math.random() * this.numCaras) + 1;
}

crear.addEventListener("click", () => {
    if (elegir.value === "") {
        new dado();
    } else {
        new dado(elegir.value);
    }
})