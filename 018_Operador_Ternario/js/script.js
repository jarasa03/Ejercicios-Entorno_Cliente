function calcularNota() {
    let nota = document.getElementById("nota").value;
    let notaBien = (nota < 5) ? "suspenso" :
        (nota < 7) ? "aprobado" :
        (nota < 9) ? "notable" : "sobresaliente";
    document.getElementById("ponerNota").innerText = notaBien;
}