// === Base de Datos de la DGT: personas con carnet de conducir ===
export const tblConductores = new Set([
    { dni: 1, nombre: "Ana", fnac: new Date("2000/12/31"), matricula: "AB" },
    { dni: 2, nombre: "Carlos", fnac: new Date("1988/1/27"), matricula: "XX" },
    { dni: 3, nombre: "David", fnac: new Date("2005/7/13"), matricula: "Z5" },
    { dni: 5, nombre: "Elena", fnac: new Date("2005/4/1") },
    { dni: 7, nombre: "Isabel", fnac: new Date("2000/2/28"), matricula: "R2" },
    { dni: 11, nombre: "José", fnac: new Date("2006/4/7") },
    { dni: 13, nombre: "Ramón", fnac: new Date("1963/9/9"), matricula: "MM" },
    { dni: 17, nombre: "Verónica", fnac: new Date("1971/2/24"), matricula: "TT" }
]);

// Características del auto de cada propietario
export const tblAutos = new Set([
    { matricula: "AB", modelo: "Tesla", color: "negro" },
    { matricula: "XX", modelo: "Tesla", color: "verde" },
    { matricula: "Z5", modelo: "Kia", color: "rojo" },
    { matricula: "R2", modelo: "Smart", color: "rojo" },
    { matricula: "MM", modelo: "Tesla", color: "verde" },
    { matricula: "TT", modelo: "Renault", color: "negro" }
]);

// Mecánica de automóviles
export const tblMecanica = new Set([
    { modelo: "Tesla", cv: 1020 }, { modelo: "Kia", cv: 585 },
    { modelo: "Smart", cv: 428 }, { modelo: "Renault", cv: 135 }
]);