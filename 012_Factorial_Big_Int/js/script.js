<<<<<<< HEAD
function factorial() {

    let numero = document.getElementById("nume").value;
    let resul = BigInt(1);

    let numeroOK = BigInt(numero);

    for (let i = BigInt(1); i <= numeroOK; i++) {

        resul *= i;

    }

    document.getElementById("resul").innerHTML = "Resultado de !" + numeroOK + ": " + resul;
=======
function factorial() {

    let numero = document.getElementById("nume").value;
    let resul = BigInt(1);

    let numeroOK = BigInt(numero);

    for (let i = BigInt(1); i <= numeroOK; i++) {

        resul *= i;

    }

    document.getElementById("resul").innerHTML = "Resultado de !" + numeroOK + ": " + resul;
>>>>>>> b9c93f9 (Primer commit desde VSCode)
}