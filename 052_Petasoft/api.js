import { getDatosConductorServicio } from "./server.js";

export function getNombreConductor(request, resolve, reject) {
    getDatosConductorServicio(request, (info) => {
        if (info) {
            resolve(info.nombre);
        } else {
            reject("Dni = " + request + " DNI Not Found")
        }
    });
}

export function getMatriculaConductor(request, resolve, reject) {
    getDatosConductorServicio(request, (info) => {
        if (info) {
            if (info.matricula) {
                resolve(info.matricula);
            } else {
                reject("Dni = " + request + " Matricula Not Found");
            }
        } else {
            reject("Dni = " + request + " DNI Not Found");
        }
    });
}

export function getEdadConductor(request, resolve, reject) {
    getDatosConductorServicio(request, (info) => {
        if (info) {
            const hoy = new Date();
            const edad = hoy.getFullYear() - info.fnac.getFullYear();

            // Ajuste por si el cumpleaños aún no ha pasado este año
            const cumpleEsteAño = new Date(hoy.getFullYear(), info.fnac.getMonth(), info.fnac.getDate());
            
            resolve(hoy < cumpleEsteAño ? edad - 1 : edad);
        } else {
            reject("Dni = " + request + " DNI Not Found");
        }
    });
}