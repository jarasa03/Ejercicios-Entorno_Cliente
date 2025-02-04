import { tblConductores } from "./database.js";

export function getDatosConductorServicio(request, response) {
    let info;
    tblConductores.forEach(persona => {
        if (persona.dni === request) {
            info = persona;
        }
    });
    response(info);
}