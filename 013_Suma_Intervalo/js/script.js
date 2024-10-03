function sumaConsecutivos() {

    event.preventDefault;
    let min = document.getElementById("minimo").value;
    let max = document.getElementById("maximo").value;

    let minOK = Number(min);
    let maxOK = Number(max);

    let resul = 0;

    for (let i = minOK; i <= maxOK; i++) {

        resul += i;

    }

    document.getElementById("resul").innerHTML = "Suma desde <span>" + minOK + "</span> hasta <span>" + maxOK + "</span>: <span>" + resul + "</span>";
}