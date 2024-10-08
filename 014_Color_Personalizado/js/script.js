function colores() {
    event.preventDefault;
    let color1 = document.getElementById("colorText").value;
    let color2 = document.getElementById("bgColor").value;

    document.getElementById("parrafo").style.color = color1;
    document.getElementById("parrafo").style.backgroundColor = color2;
}