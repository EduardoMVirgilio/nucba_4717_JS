import { create, select, request } from "./utils.js";

let url = `https://rickandmortyapi.com/api/character`
let loading = true;
const content = select('#list');
const loader = select('.loader');

const listaPersonajes = async () => { }

const observer = null;

listaPersonajes()

loading = false;
