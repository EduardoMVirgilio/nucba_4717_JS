const baseURL = "https://pokeapi.co/api/v2/"
export const getList = async (page = 0) => {
    let result = {
        page: 0,
        next: 1,
        prev: 0
    }
    let quantity = 8
    try {
        const query = await fetch(`${baseURL}/pokemon?limit=${quantity}&offset=${quantity * page}`)
        const res = await query.json()
        if (res.next) {
            result.next = page + 1
        }
        if (res.previous) {
            result.prev = page - 1
        }
        result.page = page
        result.pokemons = []
        for await (const resultado of res.results) {
            const queryPokemon = await fetch(`${resultado.url}`)
            const pokemon = await queryPokemon.json()
            const colors = {
                normal: "#aa9",
                fire: "#f42",
                grass: "#7c5",
                poison: "#a59",
                water: "#39f",
                electric: "#fc3",
                ice: "#6cf",
                fighting: "#b54",
                ground: "#db5",
                flying: "#89f",
                psychic: "#f59",
                bug: "#ab2",
                rock: "#ba6",
                ghost: "#66b",
                dragon: "#76e",
                dark: "#070301",
                steel: "#aab",
                fairy: "#e9e"
            }

            result.pokemons.push({
                id: pokemon.id,
                name: pokemon.name,
                height: pokemon.height,
                weight: pokemon.weight,
                experience: pokemon.base_experience,
                image: pokemon.sprites.other["official-artwork"]["front_default"],
                types: pokemon.types.map(({ type }) => ({ name: type.name, color: colors[type.name] }))
            })
        }
        return result
    } catch (error) {
        throw new Error(error)
    }
}

