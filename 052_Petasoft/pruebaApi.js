import { getEdadConductor, getMatriculaConductor, getNombreConductor } from "./api.js";

getNombreConductor(1, (acierto) => {
    console.log("dni = 1: " + acierto);
}, (error) => {
    console.log(error);
});

getEdadConductor(1, (acierto) => {
    console.log("dni = 1: " + acierto + " años");
}, (error) => {
    console.log(error);
});

getMatriculaConductor(1, (acierto) => {
    console.log("dni = 1: matrícula " + acierto);
}, (error) => {
    console.log(error);
});

getNombreConductor(13, (acierto) => {
    console.log("dni = 13: " + acierto);
}, (error) => {
    console.log(error);
});

getEdadConductor(13, (acierto) => {
    console.log("dni = 13: " + acierto + " años");
}, (error) => {
    console.log(error);
});

getMatriculaConductor(13, (acierto) => {
    console.log("dni = 13: matrícula " + acierto);
}, (error) => {
    console.log(error);
});

getMatriculaConductor(777, (acierto) => {
    console.log("dni = 777: matrícula " + acierto);
}, (error) => {
    console.log(error);
});

getMatriculaConductor(5, (acierto) => {
    console.log("dni = 13: matrícula " + acierto);
}, (error) => {
    console.log(error);
});

getNombreConductor(1, (aciertoNombre) => {
    getEdadConductor(1, (aciertoEdad) => {
        console.log("dni = 1: " + aciertoNombre + " tiene " + aciertoEdad + " años");
    }, (error) => {
        console.log(error);
    });
}, (error) => {
    console.log(error);
});

getNombreConductor(13, (aciertoNombre) => {
    getEdadConductor(13, (aciertoEdad) => {
        console.log("dni = 13: " + aciertoNombre + " tiene " + aciertoEdad + " años");
    }, (error) => {
        console.log(error);
    });
}, (error) => {
    console.log(error);
});

getNombreConductor(777, (aciertoNombre) => {
    getEdadConductor(777, (aciertoEdad) => {
        console.log("dni = 777: " + aciertoNombre + " tiene " + aciertoEdad + " años");
    }, (error) => {
        console.log(error);
    });
}, (error) => {
    console.log(error);
});

getNombreConductor(1, (aciertoNombre) => {
    getEdadConductor(1, (aciertoEdad) => {
        getMatriculaConductor(1, (aciertoMatricula) => {
            console.log("dni = 1: " + aciertoNombre + " tiene " + aciertoEdad + " años y un coche de matrícula " + aciertoMatricula);
        }, () => {
            console.log("dni = 1: " + aciertoNombre + " tiene " + aciertoEdad + " y no tiene coche");
        });
    }, (error) => {
        console.log(error);
    });
}, (error) => {
    console.log(error);
});

getNombreConductor(13, (aciertoNombre) => {
    getEdadConductor(13, (aciertoEdad) => {
        getMatriculaConductor(13, (aciertoMatricula) => {
            console.log("dni = 13: " + aciertoNombre + " tiene " + aciertoEdad + " años y un coche de matrícula " + aciertoMatricula);
        }, () => {
            console.log("dni = 13: " + aciertoNombre + " tiene " + aciertoEdad + " y no tiene coche");
        });
    }, (error) => {
        console.log(error);
    });
}, (error) => {
    console.log(error);
});

getNombreConductor(5, (aciertoNombre) => {
    getEdadConductor(5, (aciertoEdad) => {
        getMatriculaConductor(5, (aciertoMatricula) => {
            console.log("dni = 5: " + aciertoNombre + " tiene " + aciertoEdad + " años y un coche de matrícula " + aciertoMatricula);
        }, () => {
            console.log("dni = 5: " + aciertoNombre + " tiene " + aciertoEdad + " y no tiene coche");
        });
    }, (error) => {
        console.log(error);
    });
}, (error) => {
    console.log(error);
});

getNombreConductor(777, (aciertoNombre) => {
    getEdadConductor(777, (aciertoEdad) => {
        getMatriculaConductor(777, (aciertoMatricula) => {
            console.log("dni = 777: " + aciertoNombre + " tiene " + aciertoEdad + " años y un coche de matrícula " + aciertoMatricula);
        }, () => {
            console.log("dni = 777: " + aciertoNombre + " tiene " + aciertoEdad + " y no tiene coche");
        });
    }, (error) => {
        console.log(error);
    });
}, (error) => {
    console.log(error);
});