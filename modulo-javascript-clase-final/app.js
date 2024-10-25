const getLimit = async () => {
    try {
        let url = 'https://pokeapi.co/api/v2/pokemon?limit=1302&offset=0'
        let res = await fetch(url)
        let { results } = await res.json()
        return results.map(({ url }) => url.split('/').filter(elements => elements != '').pop()).map(id => Number(id))
    } catch (error) {
        console.error('errro', error.message)
    }
}

const getPokemon = async (id) => {
    try {
        let url = 'https://pokeapi.co/api/v2/pokemon'
        let res = await fetch(`${url}/${id}`)
        return await res.json()
    } catch (error) {
        console.error('errro', error.message)
    }
}

getLimit().then((ids) => {
    if (!ids.includes(1026)) {
        throw new Error(`No se encontro`)
    }
    return getPokemon(1024)
}).then(pokemon => {
    return document.body.innerHTML = `<pre>${JSON.stringify(pokemon, null, 2)}</pre>`
}).catch((error) => document.body.innerHTML = error.message)

