import { create, select, request } from "./utils.js";

let url = `https://rickandmortyapi.com/api/character`
let loading = true;
const content = select('#list');
const loader = select('.loader');

const listaPersonajes = async () => {
    try {
        let { info, results } = url != null ? await request(url) : { info: null, results: [] }
        url = info?.next

        if (results.length == 0) {
            loader.style.display = "none"
        }

        return results.forEach((resultado) => {
            content.append(create('li', `<img src="${resultado.image}"/> <h2>${resultado.name}<h2><p>${resultado.species}</p>`))
        })
    } catch (error) {
        console.log(error.message)
    }

}
/*
window.addEventListener("scroll", async (e) => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    const bottom = scrollTop + clientHeight >= scrollHeight - 1;
    if (bottom && !loading) {
        loading = true;
        await listaPersonajes()
        loading = false
    }
})
*/

const observer = new IntersectionObserver(async (entries) => {
    if (entries[0].isIntersecting && !loading) {
        loading = true;
        await listaPersonajes()
        loading = false
    }
}, { threshold: 0.25 });

observer.observe(loader)

listaPersonajes()

loading = false;
