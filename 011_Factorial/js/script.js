function factorial() {

    let numero = document.getElementById("nume").value;
    let resul = 1;

    let numeroOK = Number(numero);

    for (let i = 1; i <= numeroOK; i++) {

        resul *= i;

    }

    document.getElementById("resul").innerHTML = "Resultado de !" + numeroOK + ": " + resul;
}