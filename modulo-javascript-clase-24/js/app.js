import { getList } from "./poke.js";
import { create, save, read } from "./utils.js";
const list = document.querySelector("#list")
const page = document.querySelector("#page")
const btnPrev = document.querySelector("#btnPrev")
const btnNext = document.querySelector("#btnNext")


const renderPokemons = (pokemons = []) => {
    list.innerHTML = null
    pokemons.forEach(pokemon => {
        list.append(create("li", `<picture><img src="${pokemon.image}"/></picture><h2>${pokemon.name}</h2><dl>${pokemon.types.map((type) => `<dd style="background:${type.color}">${type.name}</dd>`).join("")}<dl>`))
    });
}

const render = (data = null) => {
    if (!data) {
        return getList().then(result => {
            if (result.next != undefined) {
                btnNext.addEventListener('click', () => {
                    getList(result.next).then(result => render(result))
                })
            }
            if (result.prev != undefined) {
                btnPrev.addEventListener('click', () => {
                    getList(result.prev).then(result => render(result))
                })
            }
            page.innerHTML = result.page + 1
            return renderPokemons(result.pokemons)

        })
    }

    if (data.next != undefined) {
        btnNext.addEventListener('click', () => {
            getList(data.next).then(result => render(result))
        })
    }
    if (data.prev != undefined) {
        btnPrev.addEventListener('click', () => {
            getList(data.prev).then(result => render(result))
        })
    }
    page.innerHTML = data.page + 1
    return renderPokemons(data.pokemons)
}


render()

