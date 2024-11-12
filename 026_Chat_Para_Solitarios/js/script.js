<<<<<<< HEAD
// Zona de declaración de variables
let texto = "";

document.getElementById("botoncito").addEventListener("click", () => {
    texto += document.getElementById("escribir").value + "\n";
    document.getElementById("chat").value = texto;
    document.getElementById("escribir").value = "";
    document.getElementById("escribir").focus();
=======
// Zona de declaración de variables
let texto = "";

document.getElementById("botoncito").addEventListener("click", () => {
    texto += document.getElementById("escribir").value + "\n";
    document.getElementById("chat").value = texto;
    document.getElementById("escribir").value = "";
    document.getElementById("escribir").focus();
>>>>>>> b9c93f9 (Primer commit desde VSCode)
});