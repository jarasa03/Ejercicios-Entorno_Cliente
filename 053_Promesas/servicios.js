import { tblAutos, tblConductores, tblMecanica } from "./database.js";

// Funciones para tblConductores

function getDatosConductorServicio(request) {
    return [...tblConductores].find(persona => persona.dni === request);
}

export function getDNI_Nombre(request) {
    return new Promise((resolve, reject) => {
        const info = getDatosConductorServicio(request);
        if (info) {
            resolve(info.nombre)
        } else {
            reject("DNI Not Found")
        }
    });
}

export function getDNI_Matricula(request) {
    return new Promise((resolve, reject) => {
        const info = getDatosConductorServicio(request);
        if (info) {
            if (info.matricula) {
                resolve(info.matricula);
            } else {
                reject("Matricula Not Found");
            }
        } else {
            reject("DNI Not Found");
        }
    });
}

// Funciones para tblAutos

function getDatosAutoServicio(request) {
    return [...tblAutos].find(coche => coche.matricula === request);
}

export function getMatricula_Modelo(request) {
    return new Promise((resolve, reject) => {
        const info = getDatosAutoServicio(request);
        if (info) {
            resolve(info.modelo)
        } else {
            reject("Matrícula Not Found")
        }
    });
}

// Funciones para tblMecanica

function getDatosMecanicaServicio(request) {
    return [...tblMecanica].find(coche => coche.modelo === request);
}

export function getModelo_Potencia(request) {
    return new Promise ((resolve, reject) => {
        const info = getDatosMecanicaServicio(request);
        if (info) {
            resolve(info.cv)
        } else {
            reject("Modelo Not Found")
        }
    });
}