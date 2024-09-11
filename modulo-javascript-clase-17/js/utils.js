const select = (selector = "") => document.querySelector(selector);
const selectAll = (selector = "") => document.querySelectorAll(selector);
const toggle = (element="", className="") => element.classList.toggle(className);
const create = (tag="",content="",attributes={}) => {
    const element = document.createElement(tag)
    element.innerHTML=content
    Object.keys(attributes).forEach((attr) => element.setAttribute(attr,attributes[attr]))
    return element
}
