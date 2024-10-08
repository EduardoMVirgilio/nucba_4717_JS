/*
https://apis.datos.gob.ar/georef/api/municipios?provincia=06&campos=id,nombre,centroide&max=200
https://apis.datos.gob.ar/georef/api/provincias
https://apis.datos.gob.ar/georef/api/municipios?id=022042
*/
import { request } from "./utils.js"

const PROVINCIAS_URL = 'https://apis.datos.gob.ar/georef/api/provincias'
const MUNICIPIOS_URL = 'https://apis.datos.gob.ar/georef/api/municipios'

const getProvincias = async () => {

}

const getMunicipios = async (provinciaId) => {

}

const getMunicipio = async (municipioId) => {

}

export { getProvincias, getMunicipios, getMunicipio }
