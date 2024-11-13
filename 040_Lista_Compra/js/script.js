document.getElementById("botoncito").addEventListener("click", () => {
    let vari = document.getElementById("escribir").value;
    document.getElementById("cesta").innerHTML += "<li>" + vari + "</li>";
})