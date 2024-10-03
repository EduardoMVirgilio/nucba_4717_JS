export const create = (tag = "", content = null, attrs = {}) => (Object.assign(document.createElement(tag), { innerHTML: content, ...attrs }));
export const read = (key = "", storage = localStorage) => JSON.parse(storage.getItem(key))
export const save = (key = "", data, storage = localStorage) => storage.setItem(key, JSON.stringify(data))