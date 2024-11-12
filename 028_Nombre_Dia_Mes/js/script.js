<<<<<<< HEAD
document.getElementById("fecha").addEventListener("input", () => {
    let fecha = document.getElementById("fecha").value;
    const seleccion = new Date(fecha);

    let anyo = seleccion.getFullYear();
    let mes = seleccion.getMonth();
    let dia = seleccion.getDate();
    const diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    let diaPalabra = diasSemana[seleccion.getDay()];
    let mesPalabra = meses[mes];

    document.querySelector("h1").innerText = "El " + dia + " de " + mesPalabra + " del " + anyo + " es " + diaPalabra;
=======
document.getElementById("fecha").addEventListener("input", () => {
    let fecha = document.getElementById("fecha").value;
    const seleccion = new Date(fecha);

    let anyo = seleccion.getFullYear();
    let mes = seleccion.getMonth();
    let dia = seleccion.getDate();
    const diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    let diaPalabra = diasSemana[seleccion.getDay()];
    let mesPalabra = meses[mes];

    document.querySelector("h1").innerText = "El " + dia + " de " + mesPalabra + " del " + anyo + " es " + diaPalabra;
>>>>>>> b9c93f9 (Primer commit desde VSCode)
});