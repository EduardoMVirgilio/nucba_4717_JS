// https://api.openweathermap.org/data/2.5/weather

import { request } from "./utils.js"

const WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather'
const appid = '06b52eba805f9ca54315ad411d9b10c6'
const units = 'metric'
const lang = 'es'
const getWeather = async (lat, lon) => {
    const { weather, main, name } = await request(WEATHER_URL, { lat, lon, units, lang, appid })
    const { temp, temp_min, temp_max } = main
    const { description, icon } = weather[0]
    return { description, icon, name, temp, temp_min, temp_max }
}

export { getWeather }

