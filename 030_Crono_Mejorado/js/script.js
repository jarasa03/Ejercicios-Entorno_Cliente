let interruptor = true; // Indica si el cronómetro está en marcha
let ahoraPasado; // Variable para guardar la marca de tiempo de inicio

document.querySelector("input").addEventListener("click", () => {
    if (interruptor) {
        document.querySelector("h1").innerText = "Cronómetro iniciado";
        ahoraPasado = Date.now(); // Guarda el tiempo actual solo al iniciar
        interruptor = false; // Cambia el estado a false para indicar que está en marcha
    } else {
        // Calcula el tiempo transcurrido desde que se inició el cronómetro
        const tiempoTranscurrido = Date.now() - ahoraPasado;

        // Calculamos minutos, segundos y milisegundos secuencialmente
        const minutos = Math.floor(tiempoTranscurrido / 60000);
        const segundos = Math.floor((tiempoTranscurrido % 60000) / 1000);
        const milisegundos = tiempoTranscurrido % 1000;

        // Formateamos la salida para que siempre tenga dos dígitos en minutos y segundos
        const formatoMinutos = String(minutos).padStart(2, "0");
        const formatoSegundos = String(segundos).padStart(2, "0");
        const formatoMilisegundos = String(milisegundos).padStart(3, "0");

        // Muestra el tiempo en formato mm:ss:milisegundos
        document.querySelector("h1").innerText = `${formatoMinutos}:${formatoSegundos}:${formatoMilisegundos}`;
    }
});