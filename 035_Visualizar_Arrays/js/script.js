const uno = [1, 2, 2];
const dos = [
    [1, 2],
    [1, 2, 3],
    [1, 2, 3, 4]
];


function showArray(array) {
    let string = "";
    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            string += array[i].join(" ") + "\n";
        } else {
            string += array[i] + " ";
        }
    }
    return string;
}

document.getElementById("mostrarUno").innerText = showArray(uno);
document.getElementById("mostrarDos").innerText = showArray(dos);