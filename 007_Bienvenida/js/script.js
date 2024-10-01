function bienvenida() {

    let nombre = document.getElementById("nombre").value;
    event.preventDefault();
    document.getElementById("escribir").innerText = "Bienvenido " + nombre;

}