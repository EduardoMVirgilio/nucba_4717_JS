export const select = (selector = "") => document.querySelector(selector)
export const selectAll = (selector = "") => document.querySelectorAll(selector)
export const create = (tag = "", content = "", attr = {}) => Object.assign(document.createElement(tag), { innerHTML: content, ...attr })
export const request = async (url, query = null) => {
    try {
        const respuesta = await fetch(`${url}${query != null ? `?${new URLSearchParams(query).toString()}` : ""}`)
        if (!respuesta.ok) {
            throw new Error(`HTTP error! Status: ${respuesta.status}`);
        }
        return await respuesta.json()
    } catch (error) {
        throw new Error(`Failed to fetch services: ${error.message}`)
    }
}