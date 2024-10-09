const select = (selector) => document.querySelector(selector)
const selectAll = (selector) => document.querySelectorAll(selector)
const create = (tag, content = "", attributes = {}) => (Object.assign(document.createElement(tag), { innerHTML: content, ...attributes }))
const request = async (url, query = null) => {
    try {
        let uri = `${url}${query ? `?${new URLSearchParams(query).toString()}` : ""}`
        let respuesta = await fetch(uri)
        return respuesta.json()
    } catch (error) {
        throw new Error(error)
    }
}

export { select, selectAll, create, request }