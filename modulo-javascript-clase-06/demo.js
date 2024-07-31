const tienda = {};

tienda.catalogo = [];
tienda.catalogo.push({ _sku: 1, nombre: "Producto 1", precio: 125 });
tienda.catalogo.push({ _sku: 2, nombre: "Producto 2", precio: 145 });
tienda.carrito = [];
tienda.comprar = function (_sku) {
  const buscarEnCatalogo = () => {
    let resultado = null;
    for (const producto of this.catalogo) {
      if (producto._sku === _sku) {
        resultado = producto;
      }
    }
    return resultado;
  };

  const buscarEnCarrito = () => {
    let resultado = null;
    for (const producto of this.carrito) {
      if (producto._sku === _sku) {
        resultado = producto;
      }
    }
    return resultado;
  };

  if (buscarEnCatalogo()) {
    if (!buscarEnCarrito()) {
      for (const producto of this.catalogo) {
        if (producto._sku === _sku) {
          this.carrito.push({ ...producto, cantidad: 1 });
        }
      }
    } else {
      // Logica cuando el producto esta en el carrito
    }
  } else {
    // Logica cuando el producto no esta en el catalogo
  }
};
