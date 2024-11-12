<<<<<<< HEAD
function suma() {

    event.preventDefault();
    let valor1 = document.getElementById("valor1").value;
    let valor2 = document.getElementById("valor2").value;


    let valor1OK = Number(valor1);
    let valor2OK = Number(valor2);


    let resultado = valor1OK + valor2OK;

    document.getElementById("escribir").innerText = "La suma da " + resultado;
=======
function suma() {

    event.preventDefault();
    let valor1 = document.getElementById("valor1").value;
    let valor2 = document.getElementById("valor2").value;


    let valor1OK = Number(valor1);
    let valor2OK = Number(valor2);


    let resultado = valor1OK + valor2OK;

    document.getElementById("escribir").innerText = "La suma da " + resultado;
>>>>>>> b9c93f9 (Primer commit desde VSCode)
}