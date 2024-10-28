let interruptor = true; // Indica si el cronómetro está en marcha
let ahoraPasado; // Variable para guardar la marca de tiempo de inicio

document.querySelector("input").addEventListener("click", () => {
    if (interruptor) {
        document.querySelector("h1").innerText = "Cronómetro iniciado";
        ahoraPasado = Date.now(); // Guarda el tiempo actual solo al iniciar
        interruptor = false; // Cambia el estado a false
    } else {
        // Calcula el tiempo transcurrido desde que se inició el cronómetro
        const tiempoTranscurrido = Date.now() - ahoraPasado;
        document.querySelector("h1").innerText = "Tiempo transcurrido: " + (tiempoTranscurrido / 1000) + " segundos"; // Muestra el tiempo en segundos
    }
});