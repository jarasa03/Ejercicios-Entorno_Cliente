<<<<<<< HEAD
function calcularPotencia() {

    let resultado = 1;
    let base = document.getElementById("base").value;
    let exponente = document.getElementById("exponente").value;

    let baseOK = Number(base);
    let expoOK = Number(exponente);

    for (let i = 0; i < expoOK; i++) {

        resultado *= baseOK;

    }

    document.getElementById("resul").innerHTML = "Resultado de " + baseOK + "<sup>" + expoOK + "</sup>" + " es igual a " + resultado;


=======
function calcularPotencia() {

    let resultado = 1;
    let base = document.getElementById("base").value;
    let exponente = document.getElementById("exponente").value;

    let baseOK = Number(base);
    let expoOK = Number(exponente);

    for (let i = 0; i < expoOK; i++) {

        resultado *= baseOK;

    }

    document.getElementById("resul").innerHTML = "Resultado de " + baseOK + "<sup>" + expoOK + "</sup>" + " es igual a " + resultado;


>>>>>>> b9c93f9 (Primer commit desde VSCode)
}