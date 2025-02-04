import { getDNI_Matricula, getDNI_Nombre, getMatricula_Modelo, getModelo_Potencia } from "./servicios.js";

getDNI_Nombre(1)
    .then((acierto) => {
        console.log("dni = 1: " + acierto);
    })
    .catch((error) => {
        console.log("El DNI 1 no existe (mensaje de error: " + error + ")");
    })
    .finally(() => {
        console.log("Búsqueda finalizada.");
    });

getDNI_Nombre(3)
    .then((acierto) => {
        console.log("dni = 3: " + acierto);
    })
    .catch((error) => {
        console.log("El DNI 3 no existe (mensaje de error: " + error + ")");
    })
    .finally(() => {
        console.log("Búsqueda finalizada.");
    });

getDNI_Nombre(111)
    .then((acierto) => {
        console.log("dni = 111: " + acierto);
    })
    .catch((error) => {
        console.log("El DNI 111 no existe (mensaje de error: " + error + ")");
    })
    .finally(() => {
        console.log("Búsqueda finalizada.");
    });

getMatricula_Modelo(1)
    .then((acierto) => {
        console.log("dni 1 tiene la matrícula " + acierto);
    })
    .catch((error) => {
        console.log("el dni 1 no existe (mensaje de error: " + error + ")");
    })
    .finally(() => {
        console.log("Búsqueda finalizada.");
    });

getMatricula_Modelo(3)
    .then((acierto) => {
        console.log("dni 3 tiene la matrícula " + acierto);
    })
    .catch((error) => {
        console.log("el dni 3 no existe (mensaje de error: " + error + ")");
    })
    .finally(() => {
        console.log("Búsqueda finalizada.");
    });

getMatricula_Modelo(111)
    .then((acierto) => {
        console.log("dni 111 tiene la matrícula " + acierto);
    })
    .catch((error) => {
        console.log("el dni 111 no existe (mensaje de error: " + error + ")");
    })
    .finally(() => {
        console.log("Búsqueda finalizada.");
    });

getDNI_Matricula(1)
    .then((acierto) => {
        console.log("dni 1 tiene la matrícula " + acierto);
    })
    .catch((error) => {
        if (error === "DNI Not Found") {
            console.log("el dni 1 no existe (mensaje de error: " + error + ")");
        } else if (error === "Matricula Not Found") {
            console.log("el dni 1 no tiene coche (mensaje de error: " + error + ")");
        } else {
            console.log("Error desconocido")
        }
    })
    .finally(() => {
        console.log("Búsqueda finalizada.");
    });

getDNI_Matricula(5)
    .then((acierto) => {
        console.log("dni 5 tiene la matrícula " + acierto);
    })
    .catch((error) => {
        if (error === "DNI Not Found") {
            console.log("el dni 5 no existe (mensaje de error: " + error + ")");
        } else if (error === "Matricula Not Found") {
            console.log("el dni 5 no tiene coche (mensaje de error: " + error + ")");
        } else {
            console.log("Error desconocido")
        }
    })
    .finally(() => {
        console.log("Búsqueda finalizada.");
    });

getDNI_Matricula(111)
    .then((acierto) => {
        console.log("dni 111 tiene la matrícula " + acierto);
    })
    .catch((error) => {
        if (error === "DNI Not Found") {
            console.log("el dni 111 no existe (mensaje de error: " + error + ")");
        } else if (error === "Matricula Not Found") {
            console.log("el dni 111 no tiene coche (mensaje de error: " + error + ")");
        } else {
            console.log("Error desconocido")
        }
    })
    .finally(() => {
        console.log("Búsqueda finalizada.");
    });

getMatricula_Modelo("AB")
    .then((acierto) => {
        console.log("La matrícula AB es un " + acierto);
    })
    .catch((error) => {
        console.log("La matrícula AB no existe (mensaje de error: " + error + ")");
    })
    .finally(() => {
        console.log("Búsqueda finalizada.");
    });

getMatricula_Modelo("R2")
    .then((acierto) => {
        console.log("La matrícula R2 es un " + acierto);
    })
    .catch((error) => {
        console.log("La matrícula R2 no existe (mensaje de error: " + error + ")");
    })
    .finally(() => {
        console.log("Búsqueda finalizada.");
    });

getMatricula_Modelo("HOLA")
    .then((acierto) => {
        console.log("La matrícula HOLA es un " + acierto);
    })
    .catch((error) => {
        console.log("La matrícula HOLA no existe (mensaje de error: " + error + ")");
    })
    .finally(() => {
        console.log("Búsqueda finalizada.");
    });

getModelo_Potencia("Tesla")
    .then((acierto) => {
        console.log("El modelo Tesla tiene una potencia de " + acierto + "cv");
    })
    .catch((error) => {
        console.log("El modelo Tesla no existe (mensaje de error: " + error + ")");
    })
    .finally(() => {
        console.log("Búsqueda finalizada.");
    });

getModelo_Potencia("Kia")
    .then((acierto) => {
        console.log("El modelo Kia tiene una potencia de " + acierto + "cv");
    })
    .catch((error) => {
        console.log("El modelo Kia no existe (mensaje de error: " + error + ")");
    })
    .finally(() => {
        console.log("Búsqueda finalizada.");
    });

getModelo_Potencia("Telefunken")
    .then((acierto) => {
        console.log("El modelo Telefunken tiene una potencia de " + acierto + "cv");
    })
    .catch((error) => {
        console.log("El modelo Telefunken no existe (mensaje de error: " + error + ")");
    })
    .finally(() => {
        console.log("Búsqueda finalizada.");
    });

getDNI_Matricula(1)
    .then((acierto) => {
        getMatricula_Modelo(acierto)
            .then((acierto1) => {
                console.log("dni 1 tiene un " + acierto1);
            })
            .catch((error1) => {
                console.log("el dni 1 no existe (mensaje de error: " + error1 + ")");
            })
            .finally(() => {
                console.log("Búsqueda finalizada.");
            });
        console.log("dni 1 tiene la matrícula " + acierto);
    })
    .catch((error) => {
        console.log("el dni 1 no existe (mensaje de error: " + error + ")");
    })
    .finally(() => {
        console.log("Búsqueda finalizada.");
    });

getDNI_Matricula(17)
    .then((acierto) => {
        getMatricula_Modelo(acierto)
            .then((acierto1) => {
                console.log("dni 17 tiene un " + acierto1);
            })
            .catch((error1) => {
                console.log("el dni 17 no existe (mensaje de error: " + error1 + ")");
            })
            .finally(() => {
                console.log("Búsqueda finalizada.");
            });
    })
    .catch((error) => {
        console.log("el dni 17 no existe (mensaje de error: " + error + ")");
    })
    .finally(() => {
        console.log("Búsqueda finalizada.");
    });

getDNI_Matricula(1)
    .then((acierto) => {
        getMatricula_Modelo(acierto)
            .then((acierto1) => {
                getModelo_Potencia(acierto1)
                    .then((acierto2) => {
                        console.log("el dni " + 1 + " tiene un " + acierto1 + " tiene una potencia de " + acierto2 + "cv");
                    })
                    .catch((error) => {
                        console.log("El modelo Tesla no existe (mensaje de error: " + error + ")");
                    })
                    .finally(() => {
                        console.log("Búsqueda finalizada.");
                    });
            })
            .catch((error1) => {
                console.log("el dni 1 no existe (mensaje de error: " + error1 + ")");
            })
            .finally(() => {
                console.log("Búsqueda finalizada.");
            });
        console.log("dni 1 tiene la matrícula " + acierto);
    })
    .catch((error) => {
        console.log("el dni 1 no existe (mensaje de error: " + error + ")");
    })
    .finally(() => {
        console.log("Búsqueda finalizada.");
    });

getDNI_Matricula(17)
    .then((acierto) => {
        getMatricula_Modelo(acierto)
            .then((acierto1) => {
                getModelo_Potencia(acierto1)
                    .then((acierto2) => {
                        console.log("el dni " + 17 + " tiene un " + acierto1 + " tiene una potencia de " + acierto2 + "cv");
                    })
                    .catch((error) => {
                        console.log("El modelo Tesla no existe (mensaje de error: " + error + ")");
                    })
                    .finally(() => {
                        console.log("Búsqueda finalizada.");
                    });
            })
            .catch((error1) => {
                console.log("el dni 1 no existe (mensaje de error: " + error1 + ")");
            })
            .finally(() => {
                console.log("Búsqueda finalizada.");
            });
        console.log("dni 1 tiene la matrícula " + acierto);
    })
    .catch((error) => {
        console.log("el dni 1 no existe (mensaje de error: " + error + ")");
    })
    .finally(() => {
        console.log("Búsqueda finalizada.");
    });