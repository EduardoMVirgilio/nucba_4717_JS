// Helpers
const seleccionar = (selector) => document.querySelector(selector);
const crearElemento = function (etiqueta, contenido, atributos = {}) {
  const elemento = document.createElement(etiqueta);
  elemento.innerHTML = contenido;
  for (const atributo of Object.keys(atributos)) {
    elemento.setAttribute(atributo, atributos[atributo]);
  }
  return elemento;
};
const leer = function (key, data = []) {
  let info = localStorage.getItem(key);
  if (!info) {
    localStorage.setItem(key, JSON.stringify(data));
    return data;
  }
  return JSON.parse(info);
};
const guardar = function (key, data) {
  localStorage.setItem(key, JSON.stringify(data));
  return leer(key);
};

// Elementos
const productos = seleccionar("#productos");
const carrito = seleccionar("#lista");
const total = seleccionar("#total");

// Datos
const catalogo = [
  { id: 1, nombre: "Product One", precio: 100 },
  { id: 2, nombre: "Product Two", precio: 50 },
  { id: 3, nombre: "Product Three", precio: 25 },
  { id: 4, nombre: "Product Four", precio: 75 },
];

// Comportamientos
const agregarProducto = function (evento) {
  evento.preventDefault();
  const elemento = evento.target.parentElement;
  const producto = catalogo.find((producto) => producto.id == elemento.id);
  let cart = leer("carrito");
  const productInCart = cart.find((item) => item.id == elemento.id);
  if (!productInCart) {
    cart.push({ ...producto, cantidad: 1 });
    guardar("carrito", cart);
  }
  if (productInCart) {
    productInCart.cantidad += 1;
    guardar("carrito", cart);
  }
  return mostrarCarrito();
};
const aumentarCantidad = function (evento) {
  const elemento = evento.target.parentElement.parentElement;
  const producto = catalogo.find(
    (producto) => producto.id == elemento.dataset.id
  );
  let cart = leer("carrito");
  const productInCart = cart.find((item) => item.id == producto.id);
  if (productInCart) {
    productInCart.cantidad += 1;
    guardar("carrito", cart);
  }
  return mostrarCarrito();
};
const reducirCantidad = function (evento) {
  const elemento = evento.target.parentElement.parentElement;
  const producto = catalogo.find(
    (producto) => producto.id == elemento.dataset.id
  );
  let cart = leer("carrito");
  const productInCart = cart.find((item) => item.id == producto.id);
  if (productInCart) {
    productInCart.cantidad -= 1;
    if (productInCart.cantidad == 0) {
      cart = cart.filter((item) => item.id != productInCart.id);
    }
    guardar("carrito", cart);
  }
  return mostrarCarrito();
};

// Mostrar
const mostrarProductos = function () {
  productos.innerHTML = null;
  for (const producto of catalogo) {
    const cardProduct = crearElemento(
      "li",
      `<dl><dt>${producto.nombre}</dt><dd>$${producto.precio}</dd></dl>`,
      { id: producto.id }
    );
    const formProduct = crearElemento("form", `<button>Agregar</button>`);
    formProduct.addEventListener("submit", agregarProducto);
    cardProduct.appendChild(formProduct);
    productos.appendChild(cardProduct);
  }
};
mostrarProductos();

const mostrarCarrito = function () {
  const cart = leer("carrito");
  carrito.innerHTML = null;
  for (const item of cart) {
    const cardItem = crearElemento(
      "li",
      `<dl><dt>${item.nombre}</dt><dd>$${item.precio}</dd></dl>`,
      { "data-id": item.id }
    );
    const formItem = crearElemento("form", null);
    const btnAddItem = crearElemento("button", `+`, { type: "button" });
    btnAddItem.addEventListener("click", aumentarCantidad);
    const quantityItem = crearElemento(
      "output",
      `${item.cantidad} ($${item.cantidad * item.precio})`
    );
    const btnRemoveItem = crearElemento("button", `-`, { type: "button" });
    btnRemoveItem.addEventListener("click", reducirCantidad);
    formItem.append(btnAddItem, quantityItem, btnRemoveItem);
    cardItem.appendChild(formItem);
    carrito.appendChild(cardItem);
  }
  const calcTotal = cart
    .map((item) => item.cantidad * item.precio)
    .reduce((acumulado, valor) => (acumulado += valor), 0);
  total.innerHTML =
    calcTotal != 0 ? `$${calcTotal}` : "No hay productos en el carrito";
};
mostrarCarrito();
