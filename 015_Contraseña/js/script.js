let contra_ = prompt("Introduce una contraseña");
let contador = 0;



function entrar() {
    if (contador >= 2) {
        document.getElementById("botoncito").disabled = true;
    } else if (contra_ == document.getElementById("contra").value) {
        alert("BIENVENIDO")
    } else {
        alert("Contraseña incorrecta")
        document.getElementById("contra").value = "";
        contador++;
    }


}