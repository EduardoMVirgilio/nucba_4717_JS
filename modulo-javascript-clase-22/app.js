const tareas = [
    {
        title: "Mequetar",
        description: "Realizar el HTML del Proyecto",
        deadline: 1000 * 30 * 1,
    },
    {
        title: "Personalizar",
        description: "Realizar el CSS del Proyecto",
        deadline: 1000 * 30 * 2,
    },
    {
        title: "Funcionalidades",
        description: "Realizar el JS del Proyecto",
        deadline: 1000 * 30 * 3,
    },
];
/*
document.body.innerHTML = "<p>Hola</p>"
setTimeout(() => document.body.innerHTML += "<p>Adios</p>", 1000 * 15 * 2)
setTimeout(() => document.body.innerHTML += "<p>Antes</p>", 1000 * 15 * 1)
document.body.innerHTML += "<p>Bienvenido a la clase más corta del mundo</p>"
*/
/*
setInterval(() => {
    if (document.body.innerHTML <= 3) {
        document.body.innerHTML = Number(document.body.innerHTML) + 1
    }
}, 1000)
*/

// Promise

const delay = (datos, time) => new Promise((resolve, reject) => setTimeout(() => {
    if (datos.length == 0) {
        return reject(new Error("La lista de datos esta vacia"))
    } return resolve(datos)
}, time))
/*
let loading = true;
document.body.innerHTML = "Cargando..."
*/
/*
promesa.then((data) => {
}).catch(error => {
    document.body.innerHTML = error.message
}).finally(() => {
    loading = false
})
*/
/*
try {
    let promesa = await delay(tareas, 1000)
    document.body.innerHTML = `<pre>${JSON.stringify(promesa, null, 2)}<pre>`
} catch (error) {
    document.body.innerHTML = error.message
} finally {
    loading = false
}*/

/* Minijuego */

