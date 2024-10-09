/*
https://apis.datos.gob.ar/georef/api/municipios?provincia=06&campos=id,nombre,centroide&max=200
https://apis.datos.gob.ar/georef/api/provincias
https://apis.datos.gob.ar/georef/api/municipios?id=022042
*/
import { request } from "./utils.js"

const PROVINCIAS_URL = 'https://apis.datos.gob.ar/georef/api/provincias'
const MUNICIPIOS_URL = 'https://apis.datos.gob.ar/georef/api/municipios'

const getProvincias = async () => {
    const { provincias } = await request(PROVINCIAS_URL, { campos: "id,nombre" })
    return provincias.sort((a, b) => a.nombre.localeCompare(b.nombre))
}

const getMunicipios = async (provinciaId) => {
    const { municipios } = await request(MUNICIPIOS_URL, { campos: "id,nombre", provincia: provinciaId, max: 200 })
    return municipios.sort((a, b) => a.nombre.localeCompare(b.nombre))
}

const getMunicipio = async (municipioId) => {
    const { municipios } = await request(MUNICIPIOS_URL, { campos: "centroide", id: municipioId })
    const { lat, lon } = municipios[0].centroide
    return { lat, lon }
}

export { getProvincias, getMunicipios, getMunicipio }
