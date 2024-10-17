import { create, select, request, selectAll } from "./utils.js";

// The Movie DB API 
const url = 'https://api.themoviedb.org/3/'
const assets = 'https://image.tmdb.org/t/p/original'
const endpoints = {
    trending: `${url}/trending/movie/week`,
    top: `${url}movie/top_rated`,
    upcoming: `${url}movie/upcoming`,
}

const api_key = "208a7cecc8d4ed65ea73d6abac17b319"
const language = 'es';
let page = 1;

//Elementos
const lista = select('#lista');
const btnPrev = select('#btnPrev');
const btnNext = select('#btnNext');
const categories = selectAll('[name="category"]')

// Funciones
const listaPeliculas = async (type = "trending") => {
    try {

    } catch (error) {
        console.error(error.message)
    }
}

const selectCategory = async (e) => { }


listaPeliculas()


// Eventos


btnPrev.addEventListener('click', async (e) => { })
btnNext.addEventListener('click', async (e) => { })
categories.forEach((category) => category.addEventListener('click', selectCategory))