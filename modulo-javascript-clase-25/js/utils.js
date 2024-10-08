const select = (selector) => document.querySelector(selector)
const selectAll = (selector) => document.querySelectorAll(selector)
const create = (tag, content = "", attributes = {}) => (Object.assign(document.createElement(tag), { innerHTML: content, ...attributes }))
const request = async (url, query = null) => { }

export { select, selectAll, create, request }