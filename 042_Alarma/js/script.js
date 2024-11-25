// Seleccionar elementos del DOM
const horaInput = document.getElementById("hora"); // Selecciona el campo de entrada para la hora.
const botonAlarma = document.querySelector('input[type="button"]'); // Selecciona el botón que genera la alarma.

// Agregar evento al botón
botonAlarma.addEventListener("click", () => { // Añade un evento que se ejecutará al hacer clic en el botón.
    const horaSeleccionada = horaInput.value; // Obtiene el valor ingresado en el campo de hora.

    // Validar que se haya ingresado una hora
    if (!horaSeleccionada) { // Si no se ha ingresado nada en el campo de hora...
        alert("Por favor, selecciona una hora válida."); // Muestra un mensaje de error.
        return; // Finaliza la ejecución de la función.
    }

    // Obtener la hora actual
    const ahora = new Date(); // Crea un objeto con la fecha y hora actuales.
    const [horas, minutos] = horaSeleccionada.split(":").map(Number);
    // Divide la hora seleccionada en horas y minutos, convirtiéndolos en números.

    // Crear fecha para la alarma
    const fechaAlarma = new Date( // Crea un objeto `Date` para la hora configurada.
        ahora.getFullYear(), // Usa el mismo año actual.
        ahora.getMonth(), // Usa el mismo mes actual.
        ahora.getDate(), // Usa el mismo día actual.
        horas, // Establece las horas según el input.
        minutos, // Establece los minutos según el input.
        0 // Fija los segundos a 0.
    );

    // Ajustar la fecha de la alarma si ya pasó la hora seleccionada
    if (fechaAlarma <= ahora) { // Si la hora configurada es menor o igual a la actual...
        fechaAlarma.setDate(fechaAlarma.getDate() + 1); // Mueve la alarma al día siguiente.
    }

    // Calcular la diferencia en milisegundos entre la hora actual y la hora de la alarma
    const diferenciaTiempo = fechaAlarma - ahora; // Resta las fechas para obtener la diferencia en milisegundos.

    // Configurar la alarma
    alert(`Alarma configurada para las ${horaSeleccionada}.`); // Notifica al usuario que la alarma ha sido configurada.
    setTimeout(() => { // Configura un temporizador que se activará después de `diferenciaTiempo`.
        alert("¡Es hora! ⏰"); // Muestra un mensaje indicando que es hora de la alarma.
    }, diferenciaTiempo); // Usa la diferencia calculada como tiempo de espera para el temporizador.
});