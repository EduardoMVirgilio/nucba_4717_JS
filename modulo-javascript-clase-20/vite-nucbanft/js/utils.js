export const select = (selector = "") => document.querySelector(selector);
export const selectAll = (selector = "") => document.querySelectorAll(selector);
export const toggle = (element = "", className = "") => element.classList.toggle(className);
export const create = (tag = "", content = "", attributes = {}) => {
    const element = document.createElement(tag)
    element.innerHTML = content
    Object.keys(attributes).forEach((attr) => element.setAttribute(attr, attributes[attr]))
    return element
}
export const read = (key = "", storage = localStorage) => JSON.parse(storage.getItem(key))
export const save = (key = "", storage = localStorage, data = []) => storage.setItem(key, JSON.stringify(data))