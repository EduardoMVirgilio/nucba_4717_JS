// Carrito

import { catalogo } from "./data";

const renderCart = () => {
    const list = document.querySelector('#carrito ul')
    list.innerHTML = null
    let items = read() || []
    items.forEach(item => renderItem(item.producto, item.quantity));
    const elementTotal = document.querySelector('#totalCart')
}

const renderItem = (producto, quantity) => {
    const list = document.querySelector('#carrito ul')
    const item = document.createElement('li')
    const itemForm = document.createElement('form')
    const itemButtonAdd = document.createElement('button')
    const itemButtonReduce = document.createElement('button')
    const itemButtonRemove = document.createElement('button')
    itemButtonAdd.type = "button"
    itemButtonReduce.type = "button"
    itemButtonRemove.type = "button"
    itemButtonAdd.addEventListener('click', () => updateItem(producto.id))
    itemButtonReduce.addEventListener('click', () => updateItem(producto.id, false))
    itemButtonRemove.addEventListener('click', () => removeItem(producto.id))
    itemForm.append(itemButtonAdd, itemButtonReduce, itemButtonRemove)
    item.append(itemForm)
    return list.append(item)
}

const updateItem = (id = 1, add = true) => {
    let update = read().map((item) => {
        if (item.producto.id == id && add) {
            item.quantity += 1
        }
        if (item.producto.id == id && !add) {
            item.quantity -= 1
        }
        return item
    })
    write('carrito', update)
    return renderCart()
}

const addItem = (id = 1) => {
    let cart = read()
    let check = cart.some((item) => item.producto.id == id)
    if (check) {
        return updateItem(id)
    }

    let producto = catalogo.find((producto) => producto.id == id)
    cart.push({ producto, quantity: 1 })
    write('carrito', cart)
    return renderCart()
}

const removeItem = (id = 1) => {
    let cart = read().filter((item) => item.producto.id != id)
    write('carrito', cart)
    return renderCart()
}

const read = (clave = "carrito") => {
    let data = localStorage.getItem(clave) // JSON
    return JSON.parse(data)
}

const write = (clave = "carrito", data = []) => {
    let data = JSON.stringify(data)
    return localStorage.setItem(clave, data)
} 
