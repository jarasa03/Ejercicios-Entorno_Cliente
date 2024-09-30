function lanzarDado() {

    const abecedario = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
    document.querySelector("h1").innerText = abecedario.charAt(Math.ceil(Math.random() * abecedario.length) - 1);

}