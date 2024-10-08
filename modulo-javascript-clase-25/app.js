import { select, create } from "./js/utils.js"
import { getProvincias, getMunicipios, getMunicipio } from "./js/geo.js"
import { getWeather } from "./js/meteo.js"

const PROVINCIAS_SELECT = select('#provincias')
const MUNICIPIOS_SELECT = select('#municipios')
const btn = select('#meteor button')
const content = select('#content')

const init = async () => { }

init()