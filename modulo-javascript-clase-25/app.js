import { select, create } from "./js/utils.js"
import { getProvincias, getMunicipios, getMunicipio } from "./js/geo.js"
import { getWeather } from "./js/meteo.js"

const PROVINCIAS_SELECT = select('#provincias')
const MUNICIPIOS_SELECT = select('#municipios')
const btn = select('#meteor button')
const content = select('#content')

const init = async () => {
    MUNICIPIOS_SELECT.style.display = "none";
    content.style.display = "none";
    btn.classList.add('isLoading');
    const provincias = await getProvincias();
    provincias.forEach(provincia => {
        PROVINCIAS_SELECT.appendChild(create("option", provincia.nombre, { value: provincia.id }));
    });
    btn.classList.remove('isLoading');


    PROVINCIAS_SELECT.addEventListener('change', async (e) => {
        MUNICIPIOS_SELECT.style.display = "none";
        content.style.display = "none"
        content.innerHTML = ""
        const provinciaId = e.target.value
        btn.classList.add('isLoading');
        const municipios = await getMunicipios(provinciaId);
        MUNICIPIOS_SELECT.innerHTML = ""
        MUNICIPIOS_SELECT.appendChild(create("option", "Selecciona municipio o comuna", { value: "" }));
        municipios.forEach(municipio => {
            MUNICIPIOS_SELECT.appendChild(create("option", municipio.nombre, { value: municipio.id }));
        });
        btn.classList.remove('isLoading');
        MUNICIPIOS_SELECT.style.display = "flex";
    })

    btn.addEventListener('click', async () => {
        btn.classList.add('isLoading');
        const municipioId = MUNICIPIOS_SELECT.value
        const municipio = await getMunicipio(municipioId)
        const { description, icon, name, temp, temp_min, temp_max } = await getWeather(municipio.lat, municipio.lon)
        content.innerHTML = `
            <h1>${name}</h1>
            <p>${description}</p>
            <img src="./icons/${icon}.svg" alt="Icono del clima ${description}"/>
            <dl>
                <dt>${temp}ºC</dt>
                <dd>Min:${temp_min}ºC</dd>
                <dd>Max:${temp_max}ºC</dd>
            </dl>
        `
        btn.classList.remove('isLoading');
        content.style.display = "flex";
    })


}

init()