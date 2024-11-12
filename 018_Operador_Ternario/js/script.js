<<<<<<< HEAD
function calcularNota() {
    let nota = document.getElementById("nota").value;
    let notaBien = (nota < 5) ? "suspenso" :
        (nota < 7) ? "aprobado" :
        (nota < 9) ? "notable" : "sobresaliente";
    document.getElementById("ponerNota").innerText = notaBien;
=======
function calcularNota() {
    let nota = document.getElementById("nota").value;
    let notaBien = (nota < 5) ? "suspenso" :
        (nota < 7) ? "aprobado" :
        (nota < 9) ? "notable" : "sobresaliente";
    document.getElementById("ponerNota").innerText = notaBien;
>>>>>>> b9c93f9 (Primer commit desde VSCode)
}