<<<<<<< HEAD
function calcularPotencia() {

    let resultado = 1;
    let base = document.getElementById("base").value;
    let exponente = document.getElementById("exponente").value;

    let baseOK = Number(base);
    let expoOK = Number(exponente);

    /*     for (let i = 0; i < expoOK; i++) {

            resultado *= baseOK;

        }
     */

    // Dos maneras diferentes de hacerlo
    resultado = Math.pow(baseOK, exponente);
    resultado = baseOK ** exponente;

    document.getElementById("resul").innerHTML = "Resultado de " + baseOK + "<sup>" + expoOK + "</sup>" + " es igual a " + resultado;


=======
function calcularPotencia() {

    let resultado = 1;
    let resulrado2 = 1;
    let resultado3 = 1;
    let base = document.getElementById("base").value;
    let exponente = document.getElementById("exponente").value;

    let baseOK = Number(base);
    let expoOK = Number(exponente);

    for (let i = 0; i < expoOK; i++) {

        resultado *= baseOK;

    }


    // Dos maneras diferentes de hacerlo
    resultado2 = Math.pow(baseOK, exponente);
    resultado3 = baseOK ** exponente;

    document.getElementById("resul").innerHTML = "Resultado de " + baseOK + "<sup>" + expoOK + "</sup>" + " es igual a " + resultado;
    document.getElementById("resul2").innerHTML = "Resultado de " + baseOK + "<sup>" + expoOK + "</sup>" + " es igual a " + resultado2;
    document.getElementById("resul3").innerHTML = "Resultado de " + baseOK + "<sup>" + expoOK + "</sup>" + " es igual a " + resultado3;

>>>>>>> b9c93f9 (Primer commit desde VSCode)
}