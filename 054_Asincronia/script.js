// Simulación de servicios con asincronía y fallos
function getEn(callback) {
    setTimeout(() => {
        if (Math.random() < 0.07) return callback("Error en En");
        callback(null, "En");
    }, Math.random() * 2000);
}

function getUn(callback) {
    setTimeout(() => {
        if (Math.random() < 0.07) return callback("Error en Un");
        callback(null, "un");
    }, Math.random() * 2000);
}

function getLugar(callback) {
    setTimeout(() => {
        if (Math.random() < 0.07) return callback("Error en Lugar");
        callback(null, "lugar");
    }, Math.random() * 2000);
}

function getDe(callback) {
    setTimeout(() => {
        if (Math.random() < 0.07) return callback("Error en De");
        callback(null, "de");
    }, Math.random() * 2000);
}

function getLa(callback) {
    setTimeout(() => {
        if (Math.random() < 0.07) return callback("Error en La");
        callback(null, "la");
    }, Math.random() * 2000);
}

function getMancha(callback) {
    setTimeout(() => {
        if (Math.random() < 0.07) return callback("Error en Mancha");
        callback(null, "Mancha");
    }, Math.random() * 2000);
}

// Anidación con callbacks
function construirFraseCallback() {
    getEn((err, en) => {
        if (err) return console.log(err);
        getUn((err, un) => {
            if (err) return console.log(err);
            getLugar((err, lugar) => {
                if (err) return console.log(err);
                getDe((err, de) => {
                    if (err) return console.log(err);
                    getLa((err, la) => {
                        if (err) return console.log(err);
                        getMancha((err, mancha) => {
                            if (err) return console.log(err);
                            console.log(`${en} ${un} ${lugar} ${de} ${la} ${mancha}`);
                        });
                    });
                });
            });
        });
    });
}

// Implementación con promesas
function getWord(word) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.07) return reject(`Error en ${word}`);
            resolve(word);
        }, Math.random() * 2000);
    });
}

function construirFrasePromesas() {
    getWord("En")
        .then(en => getWord("un").then(un => ({ en, un })))
        .then(obj => getWord("lugar").then(lugar => ({...obj, lugar })))
        .then(obj => getWord("de").then(de => ({...obj, de })))
        .then(obj => getWord("la").then(la => ({...obj, la })))
        .then(obj => getWord("Mancha").then(mancha => ({...obj, mancha })))
        .then(({ en, un, lugar, de, la, mancha }) => {
            console.log(`${en} ${un} ${lugar} ${de} ${la} ${mancha}`);
        })
        .catch(err => console.log(err));
}

// Implementación con async-await (dos funciones sin setTimeout)
async function getWordAsync(word) {
    if (Math.random() < 0.07) throw new Error(`Error en ${word}`);
    return word;
}

async function construirFraseAsync() {
    try {
        const en = await getWordAsync("En");
        const un = await getWordAsync("un");
        const lugar = await getWordAsync("lugar");
        const de = await getWordAsync("de");
        const la = await getWordAsync("la");
        const mancha = await getWordAsync("Mancha");
        console.log(`${en} ${un} ${lugar} ${de} ${la} ${mancha}`);
    } catch (error) {
        console.log(error.message);
    }
}

// Ejecutar los métodos
construirFraseCallback();
construirFrasePromesas();
construirFraseAsync();