function lanzarDado() {

    const abecedario = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
    let palabra = "";

    for (i = 0; i < 5; i++) {
        palabra += abecedario.charAt(Math.ceil(Math.random() * abecedario.length) - 1)
    }
    document.querySelector("h1").innerText = palabra;

}