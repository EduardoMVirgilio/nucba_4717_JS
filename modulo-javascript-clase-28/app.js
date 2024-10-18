import { create, select, request, selectAll } from "./utils.js";

// The Movie DB API 
const url = 'https://api.themoviedb.org/3/'
const assets = 'https://image.tmdb.org/t/p/original'
const endpoints = {
    trending: `${url}trending/movie/week`,
    top: `${url}movie/top_rated`,
    upcoming: `${url}movie/upcoming`,
    search: `${url}search/movie`
}

const api_key = "208a7cecc8d4ed65ea73d6abac17b319"
const language = 'en';
let page = 1;
let query = ""
let type = 'trending'


//Elementos
const lista = select('#lista');
const btnPrev = select('#btnPrev');
const btnNext = select('#btnNext');
const categories = selectAll('[name="category"]')
const pageIndicator = select('#page')
const inputSearch = select('#search')
const formFilter = select('#filter')
const errorMsg = select('#error')

// Funciones
const listaPeliculas = async () => {
    try {
        let { results } = await request(endpoints[type], type != 'search' ? { page, language, api_key } : { query, page, language, api_key })
        lista.innerHTML = null

        if (page == 1) {
            btnPrev.setAttribute('disabled', "true")
        }

        if (page == 500) {
            btnNext.setAttribute('disabled', "true")
        }

        if (page > 1 && page <= 500) {
            btnPrev.removeAttribute('disabled')
            btnNext.removeAttribute('disabled')
        }

        pageIndicator.innerHTML = page

        results.forEach((movie) => {
            let item = create('li', `<picture><img src="${assets}${movie.poster_path}" alt=""></picture>
            <article>
                <h2>${movie.original_title}</h2>
                <p>Fecha de estreno: ${new Date(movie.release_date).toLocaleDateString('es')}</p>
            </article>
            <span>${Math.round(Number(movie.vote_average) * 10)}% de popularidad</span>`)
            lista.append(item)
        })

    } catch (error) {
        console.error(error.message)
    }
}

const selectCategory = async (e) => {
    page = 1
    type = e.target.id
    await listaPeliculas()
}


listaPeliculas()


// Eventos
btnPrev.addEventListener('click', async (e) => {
    if (page == 1) {
        btnPrev.setAttribute('disabled', "true")
        return null
    }
    btnPrev.removeAttribute('disabled')
    page--
    await listaPeliculas()
})

btnNext.addEventListener('click', async (e) => {
    if (page == 500) {
        btnNext.setAttribute('disabled', "true")
        return null
    }
    btnNext.removeAttribute('disabled')
    page++
    await listaPeliculas()
})

categories.forEach((category) => category.addEventListener('input', selectCategory))

inputSearch.addEventListener('input', async (e) => {
    const value = String(e.target.value).trim()
    if (value.length <= 3) {
        errorMsg.innerHTML = "Debes tener 3 carateres minimo."
        return null
    }
    categories.forEach((category) => category.checked = false)
    errorMsg.innerHTML = null
    page = 1
    query = value
    type = 'search'
    await listaPeliculas()
})

formFilter.onsubmit = (e) => e.preventDefault()