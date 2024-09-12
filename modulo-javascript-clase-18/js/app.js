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

    return item
}

let appState = {
    category: "todas",
    page: 1 // 1 - 3
}

const list = select("#list")
const formPaginate = select("#products > form")

const showList = () => {
    list.innerHTML = null
    if (appState.category == "todas") {
        formPaginate.style.display = "flex"
        let lista = catalogo.filter((producto) => producto.id > (appState.page - 1) * 6 && producto.id <= appState.page * 6)
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