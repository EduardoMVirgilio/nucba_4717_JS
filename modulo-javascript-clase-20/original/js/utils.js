const select = (selector = "") => document.querySelector(selector);
const selectAll = (selector = "") => document.querySelectorAll(selector);
const toggle = (element = "", className = "") => element.classList.toggle(className);
const create = (tag = "", content = "", attributes = {}) => {
    const element = document.createElement(tag)
    element.innerHTML = content
    Object.keys(attributes).forEach((attr) => element.setAttribute(attr, attributes[attr]))
    return element
}
const read = (key = "", storage = localStorage) => JSON.parse(storage.getItem(key))
const save = (key = "", storage = localStorage, data = []) => storage.setItem(key, JSON.stringify(data))