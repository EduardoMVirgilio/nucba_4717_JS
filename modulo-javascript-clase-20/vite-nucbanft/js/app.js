import '../css/main.css'
import { catalogo } from './data.js'
import { select, selectAll, create, read, save } from './utils.js'
/* Boton del Menu */

const btnMenu = select('#btn-menu')
const mobileMenu = select('#mobile-nav')
const body = document.body
const btnCart = select('#btn-cart')
const cartElement = select("#cart")

const toggleMenu = () => {
    mobileMenu.classList.toggle("active")
    cartElement.classList.remove("active")
    const isActive = mobileMenu.classList.contains("active")
    if (!isActive) {
        body.classList.remove('overlay')
    } else {
        body.classList.add('overlay')
    }
}
btnMenu.addEventListener('click', toggleMenu)

/* Boton del carrito */

const toggleCart = () => {
    cartElement.classList.toggle("active")
    mobileMenu.classList.remove("active")
    const isActive = cartElement.classList.contains("active")
    if (!isActive) {
        body.classList.remove('overlay')
    } else {
        body.classList.add('overlay')
    }
}
btnCart.addEventListener('click', toggleCart)


/* Render del Catalogo Dinamico */

const templateProduct = (datos) => {
    const { id, name, bid, user, userImg, cardImg, category } = datos
    const item = create('li', '', { "data-id": id, "data-category": category, })
    const itemForm = create('form', '<button>Add</button>')

    item.innerHTML = `<picture>
          <img src="${cardImg}" alt="Imagen del producto ${name}" />
        </picture>
        <h3>${name}</h3>
        <p>Current Bid</p>
        <figure>
          <img src="${userImg}" alt="Avatar del creador" />
          <figcaption>@${user}</figcaption>
        </figure>
        <p class="price">${bid} ETH</p>`
    item.appendChild(itemForm)
    /* Agregamos la funcionalidad del Carrito */
    itemForm.addEventListener('submit', (event) => {
        event.preventDefault()
        addProductToCart(id)
    })
    return item
}

let appState = {
    category: "todas",
    page: 1, // 1 - 3
    cart: read('carrito') || []
}

const list = select("#list")
const formPaginate = select("#products > form")

const showList = () => {
    list.innerHTML = null
    if (appState.category == "todas") {
        formPaginate.style.display = "flex"
        let quantity = 6
        let start = (appState.page - 1) * quantity // 0 - 6 - 12
        let end = appState.page * quantity // 6 - 12 - 18
        let lista = catalogo.filter((producto) => producto.id > start && producto.id <= end)
        if (lista.length != 0) {
            return lista.forEach((producto) => list.append(templateProduct(producto)))
        }
    }
    if (appState.category != "todas") {
        formPaginate.style.display = "none"
        let lista = catalogo.filter((producto) => producto.category == appState.category)
        if (lista.length != 0) {
            return lista.forEach((producto) => list.append(templateProduct(producto)))
        }
    }

}

showList()

const selectCategory = (evento) => {
    const target = evento.target
    selectAll('#categories li').forEach(cat => cat.classList.remove('active'))
    target.classList.add('active')
    let category = target.dataset.category
    appState.category = category
    showList()
}

selectAll('#categories li').forEach((cat) => cat.addEventListener('click', selectCategory))


select('#btnPrev').addEventListener('click', (evento) => {
    appState.page = appState.page == 1 ? 1 : appState.page - 1
    appState.category = "todas"
    console.log(appState)
    if (appState.page == 1) {
        evento.target.setAttribute('disabled', true)
    }
    if (appState.page > 1 && appState.page <= 3) {
        select('#btnNext').removeAttribute('disabled')
    }
    select('#page').innerText = appState.page
    showList()
})

select('#btnNext').addEventListener('click', (evento) => {
    appState.page = appState.page == 3 ? 3 : appState.page + 1
    appState.category = "todas"
    if (appState.page > 1 && appState.page < 3) {
        select('#btnNext').removeAttribute('disabled')
        select('#btnPrev').removeAttribute('disabled')
    }
    if (appState.page == 3) {
        evento.target.setAttribute('disabled', true)
    }
    select('#page').innerText = appState.page
    showList()
})

/* Logica de carrito */

const addProductToCart = (id) => {
    let product = catalogo.find((p) => p.id == id)
    let productIsInCart = appState.cart.some(item => item.product.id == id)
    if (!productIsInCart) {
        appState.cart.push({ product, quantity: 1 });
        save('carrito', localStorage, appState.cart);
    } else {
        appState.cart = appState.cart.map((item) => {
            if (item.product.id == id) {
                item.quantity = item.quantity + 1
                return item
            }
            return item
        })
        save('carrito', localStorage, appState.cart);
    }
    return renderCart()
}


const removeProductToCart = (id) => {
    let product = catalogo.find((p) => p.id == id)
    let productIsInCart = appState.cart.some(item => item.product.id == id)
    if (productIsInCart) {
        appState.cart = appState.cart.filter((item) => item.product.id != product.id);
        save('carrito', localStorage, appState.cart);
    }
    return renderCart()
}

const addQuantityItem = (id) => {
    appState.cart = appState.cart.map((item) => {
        if (item.product.id == id) {
            item.quantity = item.quantity + 1
            return item
        }
        return item
    })
    save('carrito', localStorage, appState.cart);
    return renderCart()
}

const reduceQuantityItem = (id) => {
    appState.cart = appState.cart.map((item) => {
        if (item.product.id == id) {
            item.quantity = item.quantity - 1
            return item
        }
        return item
    }).filter(item => item.quantity > 0)
    save('carrito', localStorage, appState.cart);
    return renderCart()
}


/* Render del Carrito Dinamico */

const renderItem = (item) => {
    const { product, quantity } = item
    const { id, name, cardImg, user, bid } = product
    const itemElement = create('li', null, { "data-product": id })
    itemElement.innerHTML = `
         <picture><img src="${cardImg}" alt="Imagen del NFT de ${name}"></picture>
          <ul>
            <li>${name}</li>
            <li>@${user}</li>
            <li>${bid * quantity} ETH (${quantity})</li>
          </ul>`
    const itemForm = create('form', null, {})
    const itemFormBtnAdd = create('button', `+`, { type: "button", "data-product": id })
    const itemFormBtnReduce = create('button', `-`, { type: "button", "data-product": id })

    itemForm.addEventListener('submit', (e) => e.preventDefault())
    itemFormBtnAdd.addEventListener('click', (e) => addQuantityItem(e.target.dataset.product))
    itemFormBtnReduce.addEventListener('click', (e) => reduceQuantityItem(e.target.dataset.product))
    itemForm.append(itemFormBtnReduce, itemFormBtnAdd)
    itemElement.appendChild(itemForm)
    return itemElement
}

const renderCart = () => {
    const cartList = select("#cart ul")
    cartList.innerHTML = null
    appState.cart.forEach((item) => cartList.append(renderItem(item)))
    const cartTotal = select("#total")
    const total = appState.cart.reduce((pItem, item) => pItem += item.product.bid * item.quantity, 0)
    cartTotal.innerHTML = `${total} ETH`
}

renderCart()

select("#finish").addEventListener('click', () => {
    if (confirm("Estas seguro de finalizar tu compra?")) {
        alert('Gracias por tu compra! 😀')
        appState.cart = []
        localStorage.removeItem('carrito');
        renderCart()
    }
})


// Typewriting
import TypeIt from "typeit";

new TypeIt(select("#content h1"), {
    strings: ["Descubre la nueva era de Crypto "],
    speed: 100,
    cursorChar: "|",
}).go()

// Scroll Reveal

import ScrollReveal from "scrollreveal"

const reveal = (selector, direction = 'bottom', duration = 1000) => ScrollReveal({ distance: "100px", reset: true, delay: 100 }).reveal(select(selector), { origin: direction, duration })

reveal("#info", "bottom")
reveal("#discover", "left")