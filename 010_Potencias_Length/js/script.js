<<<<<<< HEAD
function calcularPotencia() {

    event.preventDefault();
    let resultado3 = 1;
    let base = document.getElementById("base").value;
    let exponente = document.getElementById("exponente").value;

    let baseOK = BigInt(base);
    let expoOK = BigInt(exponente);

    resultado3 = baseOK ** expoOK;
    let resultado3String = String(resultado3);

    document.getElementById("resul3").innerHTML = "Resultado de " + baseOK + "<sup>" + expoOK + "</sup>" + " es igual a " + resultado3;
    document.getElementById("tamanyo").innerHTML = "Tamaño: " + resultado3String.length;

=======
function calcularPotencia() {

    event.preventDefault();
    let resultado3 = 1;
    let base = document.getElementById("base").value;
    let exponente = document.getElementById("exponente").value;

    let baseOK = BigInt(base);
    let expoOK = BigInt(exponente);

    resultado3 = baseOK ** expoOK;
    let resultado3String = String(resultado3);

    document.getElementById("resul3").innerHTML = "Resultado de " + baseOK + "<sup>" + expoOK + "</sup>" + " es igual a " + resultado3;
    document.getElementById("tamanyo").innerHTML = "Tamaño: " + resultado3String.length;

>>>>>>> b9c93f9 (Primer commit desde VSCode)
}