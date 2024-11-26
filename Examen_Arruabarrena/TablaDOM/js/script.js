const provincias = [
    ["Álava", 329856, 3037],
    ["Albacete", 387735, 14924],
    ["Alicante", 1904362, 5817],
    ["Almería", 723899, 8775],
    ["Asturias", 1006193, 10604],
    ["Ávila", 159062, 8050],
    ["Badajoz", 667000, 21766],
    ["Baleares", 1223961, 4992],
    ["Barcelona", 5641485, 7728],
    ["Burgos", 353021, 14292],
    ["Cáceres", 386302, 19868],
    ["Cádiz", 1259339, 7440],
    ["Cantabria", 584407, 5321],
    ["Castellón", 578506, 6636],
    ["Ceuta", 82533, 19],
    ["Ciudad Real", 489950, 19813],
    ["Córdoba", 777414, 13771],
    ["Cuenca", 198842, 17140],
    ["Gerona", 776944, 5910],
    ["Granada", 929968, 12647],
    ["Guadalajara", 266471, 12214],
    ["Guipúzcoa", 713583, 1980],
    ["Huelva", 532865, 10128],
    ["Huesca", 222329, 15636],
    ["Jaén", 622617, 13496],
    ["La Coruña", 1120185, 7950],
    ["La Rioja", 315896, 5045],
    ["Las Palmas", 1153633, 4066],
    ["León", 452219, 15581],
    ["Lérida", 437260, 12172],
    ["Lugo", 324419, 9856],
    ["Madrid", 6769113, 8028],
    ["Málaga", 1711693, 7306],
    ["Melilla", 83196, 13],
    ["Murcia", 1522640, 11314],
    ["Navarra", 659232, 10391],
    ["Orense", 304104, 7273],
    ["Palencia", 157340, 8052],
    ["Pontevedra", 942849, 4495],
    ["Salamanca", 326506, 12350],
    ["Santa Cruz de Tenerife", 1098831, 3381],
    ["Segovia", 153812, 6921],
    ["Sevilla", 1960257, 14036],
    ["Soria", 89176, 10306],
    ["Tarragona", 823721, 6303],
    ["Teruel", 133118, 14810],
    ["Toledo", 709403, 15370],
    ["Valencia", 2589308, 10807],
    ["Valladolid", 517758, 8110],
    ["Vizcaya", 1133833, 2217],
    ["Zamora", 167846, 10561],
    ["Zaragoza", 959140, 17274]
];

let tabla = "<tr><th>Provincia</th><th>Población</th><th>Km2</th><th>Densidad</th></tr>";
let totalPoblacion = 0;
let totalArea = 0;

for (let i = 0; i < provincias.length; i++) {
    const [nombre, poblacion, area] = provincias[i];
    const densidad = Math.round(poblacion / area);
    totalPoblacion += poblacion;
    totalArea += area;
    
    tabla += `<tr>
                <td>${nombre}</td>
                <td id='derecha'>${poblacion}</td>
                <td id='derecha'>${area}</td>
                <td id='derecha'>${densidad}</td>
              </tr>`;
}

const densidadTotal = Math.round(totalPoblacion / totalArea);
tabla += `<tr>
            <th id='izquierda'>TOTAL</th>
            <th id='derecha'>${totalPoblacion}</th>
            <th id='derecha'>${totalArea}</th>
            <th id='derecha'>${densidadTotal}</th>
          </tr>`;

document.getElementById("tabla").innerHTML = tabla;
