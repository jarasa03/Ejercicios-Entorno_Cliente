document.getElementById("botoncito").addEventListener("click", () => {
    let vari = document.getElementById("escribir").value;

    // Añadir el nuevo valor a la lista <ol>
    let li = document.createElement("li");
    li.textContent = vari;
    document.getElementById("cesta").appendChild(li);

    // Añadir el nuevo valor al <select>
    let option = document.createElement("option");
    option.text = vari;
    document.getElementById("selector").add(option);

    // Limpiar el campo de texto
    document.getElementById("escribir").value = "";
});

document.getElementById("cargarselo").addEventListener("click", () => {
    let selector = document.getElementById("selector");
    let selectedValue = selector.value;  // Obtener el valor seleccionado

    // Si hay algo seleccionado
    if (selectedValue) {
        let options = selector.options; // Propiedad para sacar todas las opciones de un selector

        // Recorremos las opciones y buscamos la opción con el valor seleccionado
        for (let i = 0; i < options.length; i++) {
            if (options[i].text === selectedValue) {
                // Eliminar la opción seleccionada del <select>
                selector.remove(i);
                break;
            }
        }

        // Eliminar el <li> con el valor seleccionado de la lista <ol>
        let listaItems = document.getElementById("cesta").getElementsByTagName("li");

        for (let i = 0; i < listaItems.length; i++) {
            if (listaItems[i].textContent === selectedValue) {
                // Eliminar el <li> con el texto seleccionado
                listaItems[i].remove();
                break;
            }
        }

        // Ahora, recargamos los elementos para actualizar los índices del <ol>
        // Vaciar el <ol>
        let cesta = document.getElementById("cesta");
        cesta.innerHTML = "";

        // Volver a añadir los elementos restantes a la lista
        let remainingItems = selector.options;
        for (let i = 0; i < remainingItems.length; i++) {
            // Añadir el <li> de nuevo a la lista <ol>
            let li = document.createElement("li");
            li.textContent = remainingItems[i].text;
            cesta.appendChild(li);
        }
    }
});
