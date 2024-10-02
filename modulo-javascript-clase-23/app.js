/* Promesas | Clase 23 */
/*
const makePromise = (datos = [], time = 1) => new Promise((resolver, rechazar) => setTimeout(() => {
    if (datos.length == 0) {
        return rechazar(new Error('los datos no pueden quedar vacios'))
    }
    return resolver(datos)
}, 1000 * time))

let promesa = makePromise([{}], 60)

promesa.then(datos => document.body.innerHTML = `<pre>${JSON.stringify(datos, null, 2)}</pre>`).catch(error => document.body.innerHTML = error.message)
*/
/* API | Clase 24 */
/*
const getFakeUsers = async (id) => {
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        if (res.status == 200) {
            return await res.json()
        }
        throw new Error('no hay usuario')
    } catch (error) {
        return error
    }
}

getFakeUsers(1).then(usuario => document.body.innerHTML = `<pre>${JSON.stringify(usuario, null, 2)}</pre>`).catch(error => document.body.innerHTML = error.message)
*/