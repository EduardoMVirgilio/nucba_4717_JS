import { create, select, request } from "./utils.js";

let url = `https://rickandmortyapi.com/api/character`
let loading = true;
const content = select('#list');
const loader = select('.loader');

const listaPersonajes = async () => { }

const observer = new IntersectionObserver(async (entries) => { }, {});

listaPersonajes()

loading = false;
