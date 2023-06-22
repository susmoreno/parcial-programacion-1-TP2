'use strict';

let productos = [
    {
      id: 1,
      nombre: 'Paseo del Fauce',
      descripcion: 'Descripción:\n Pintor: José Montiel\n Pintura en Oleo sobre lienzo\n Medidas: 66cm x 30cm',
      precio: 18000,
      imagen: 'imagenes/abstracto_uno.webp',
      categoria: 'Abstracto',
      cantidad: 1,
    },
    {
      id: 2,
      nombre: 'Infinito',
      descripcion: 'Descripción:\n Pintor: Ricardo Colmenares\n Pintura en Oleo sobre lienzo\n Medidas: 78cm x 46cm',
      precio: 16500,
      imagen: 'imagenes/abstracto2.jpg',
      categoria: 'Abstracto',
      cantidad: 1,
    },
    {
      id: 3,
      nombre: 'Eternidad',
      descripcion: 'Descripción:\n Pintor: Juan Rodriguez\n Pintura en Oleo sobre lienzo\n Medidas: 55cm x 29cm',
      precio: 21000,
      imagen: 'imagenes/abstracto_tres.jpg',
      categoria: 'Abstracto',
      cantidad: 1,
    },
    {
      id: 4,
      nombre: 'Tormento de invierno',
      descripcion: 'Descripción:\n Pintor: Nicolás Arce\n Pintura en Oleo sobre lienzo\n Medidas: 54cm x 30cm',
      precio: 33000,
      imagen: 'imagenes/paisaje_dos.jpg',
      categoria: 'Paisajes',
      cantidad: 1,
    },
    {
      id: 5,
      nombre: 'Muerte',
      descripcion: 'Descripción:\n Pintor: Nicolás Arce\n Pintura en Oleo sobre lienzo\n Medidas: 67cm x 34cm',
      precio: 15800,
      imagen: 'imagenes/paisaje_cuatro.jpg',
      categoria: 'Paisajes',
      cantidad: 1,
    },
    {
      id: 6,
      nombre: 'Atardecer en la Pradera',
      descripcion: 'Descripción:\n Pintor: Carolina Hamada\n Pintura en Oleo sobre lienzo\n Medidas: 64cm x 35cm',
      precio: 28900,
      imagen: 'imagenes/paisaje_tres.jpg',
      categoria: 'Paisajes',
      cantidad: 1,
    },
    {
      id: 7,
      nombre: 'La Prometida',
      descripcion: 'Descripción:\n Pintor: Elizabeth Heichhorn\n Pintura en Oleo sobre lienzo\n Medidas: 30cm x 64cm',
      precio: 33600,
      imagen: 'imagenes/la_prometida_elizabetheichhorn.jpg',
      categoria: 'Retratos',
      cantidad: 1,
    },
    {
      id: 8,
      nombre: 'Bernita',
      descripcion: 'Descripción:\n Pintor: Antonio Berni\n Pintura en Oleo sobre lienzo\n Medidas: 41cm x 76cm',
      precio: 19980,
      imagen: 'imagenes/retrato_antonioberni.jpg',
      categoria: 'Retratos',
      cantidad: 1,
    },
    {
      id: 9,
      nombre: 'Cerati',
      descripcion: 'Descripción:\n Pintor: Pablo Cáceres\n Pintura en Oleo sobre lienzo\n Medidas: 28cm x 34cm',
      precio: 39650,
      imagen: 'imagenes/retrato_cerati.jpg',
      categoria: 'Retratos',
      cantidad: 1,
    },
    {
      id: 10,
      nombre: 'Florencio',
      descripcion: 'Descripción:\n Pintor: Florencio Molina Campos\n Pintura en Oleo sobre lienzo\n Medidas: 64cm x 24cm',
      precio: 49500,
      imagen: 'imagenes/gauchesca_florencio_molina_campos.jpg',
      categoria: 'Gauchesca',
      cantidad: 1,
    },
    {
      id: 11,
      nombre: 'El defensor del norte',
      descripcion: 'Descripción:\n Pintor: Aldo Chiappe\n Pintura en Oleo sobre lienzo\n Medidas: 54cm x 29cm',
      precio: 42000,
      imagen: 'imagenes/eldefensordelnorteargentino_aldo_chiappe.png',
      categoria: 'Gauchesca',
      cantidad: 1,
    },
    {
      id: 12,
      nombre: 'La Granja',
      descripcion: 'Descripción:\n Pintor: Carlos Montefusco\n Pintura en Oleo sobre lienzo\n Medidas: 89cm x 45cm',
      precio: 38050,
      imagen: 'imagenes/gauchesca_carlos_montefusco.jpg',
      categoria: 'Gauchesca',
      cantidad: 1,
    },
  ];
  let cantidadProductos = 0;
  let montoapagar = 0;
  let carrito = [];

  const categorias = [...new Set(productos.map(producto => producto.categoria))];
  const filtroCategorias = document.getElementById("filtro-categorias");
  
  categorias.forEach(categoria => {
    const boton = document.createElement("button");
    boton.classList.add("btn");
    boton.classList.add("botoncategoria");
    boton.classList.add("btn-dark");
    boton.innerText = categoria;
    boton.addEventListener("click", () => {
      filtrarPorCategoria(categoria);
    });
  
    filtroCategorias.append(boton);
  });

productos.forEach(producto => {
  const contenedorcatalogo = document.createElement("div");
  contenedorcatalogo.setAttribute("class", "contenedor-catalogo");

  const card = document.createElement("div");
  card.setAttribute("class", "card");
  card.dataset.id = producto.id;

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  const cardTitle = document.createElement("h5");
  cardTitle.classList.add("card-title");
  cardTitle.innerText = producto.nombre;

  const cardSubtitle = document.createElement("h6");
  cardSubtitle.className = "card-subtitle";
  cardSubtitle.innerText = producto.precio.toLocaleString("es-AR", {
    style: "currency",
    currency: "ARS",
  });

  const imgproductos = document.createElement('img');
  imgproductos.src = producto.imagen;
  cardBody.appendChild(imgproductos);

  const contentContainer = document.createElement("div");
  contentContainer.classList.add("content-container");

  contentContainer.append(cardTitle, cardSubtitle);

  let buttonAgregarCarrito = document.createElement ("button");
                buttonAgregarCarrito.innerText = `Agregar al carrito`;
                buttonAgregarCarrito.classList.add("btn-agregarCarrito");
                buttonAgregarCarrito.addEventListener('click', (e) => {
                  const button = e.target;
                  const cardBody = button.parentNode;
                  const card = cardBody.parentNode;
                  const productoId = card.dataset.id;
                    for (let producto of productos){
                      if (producto.id == productoId){
                          agregarAlCarrito(producto);
                            break;
                        }
                    }
                });
  
  const vermasbutton = document.createElement("button");
  vermasbutton.classList.add("btn-dark");
  vermasbutton.classList.add("ver-mas");
  vermasbutton.innerText = "Ver más";

  cardBody.appendChild(contentContainer);
  cardBody.appendChild(buttonAgregarCarrito);
  cardBody.appendChild(vermasbutton);
  card.appendChild(cardBody);
  contenedorcatalogo.appendChild(card);

  document.querySelector(".contenedor-catalogo").append(contenedorcatalogo);
});

let filtroActivo = null;

function filtrarPorCategoria(categoria) {
  const contenedorCatalogo = document.querySelector(".contenedor-catalogo");
  
  if (filtroActivo === categoria) {
    filtroActivo = null;
    limpiarCatalogo(contenedorCatalogo);
    mostrarProductos(productos);
  } else {
    filtroActivo = categoria;
    const productosFiltrados = productos.filter(producto => producto.categoria === categoria);
    limpiarCatalogo(contenedorCatalogo);
    mostrarProductos(productosFiltrados);
  }
}

function limpiarCatalogo(contenedorCatalogo) {
  while (contenedorCatalogo.firstChild) {
    contenedorCatalogo.removeChild(contenedorCatalogo.firstChild);
  }
}

function agregarAlCarrito(producto){
  let itemCarrito = document.getElementById("cantproductoshome");
  let precioFinal = document.getElementById("totalproductoshome");
  let preciofinalcarrito = document.getElementById("precio-total");

  montoapagar += producto.precio;
  if (carrito.length == 0) {
      producto.cantidad = 1;
      carrito.push(producto);
  } else {
      let productoExistente = false;
      for (let i = 0; i < carrito.length; i++) {
          if (carrito[i].id == producto.id) {
              carrito[i].cantidad += 1;
              productoExistente = true;
              break;
          }
      }
      if (!productoExistente) {
          producto.cantidad = 1;
          carrito.push(producto);
      }
  }
  cantidadProductos++

  if( preciofinalcarrito != null){
    preciofinalcarrito.innerText = "Precio total:" + montoapagar.toLocaleString("es-AR", {
      style: "currency",
      currency: "ARS",
    });
}
 itemCarrito.innerText = cantidadProductos;
 precioFinal.innerText = montoapagar.toLocaleString("es-AR", {
  style: "currency",
  currency: "ARS",
});
}
function mostrarProductos(productos) {
  const contenedorCatalogo = document.querySelector(".contenedor-catalogo");
  contenedorCatalogo.innerHTML = "";

  productos.forEach(producto => {
    const contenedorcatalogo = document.createElement("div");
    contenedorcatalogo.setAttribute("class", "contenedor-catalogo");
  
    const card = document.createElement("div");
    card.setAttribute("class", "card");
    card.dataset.id = producto.id;
    card.classList.add("paraflex");
  
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
  
    const cardTitle = document.createElement("h5");
    cardTitle.classList.add("card-title");
    cardTitle.innerText = producto.nombre;
  
    const cardSubtitle = document.createElement("h6");
    cardSubtitle.className = "card-subtitle";
    cardSubtitle.innerText = producto.precio.toLocaleString("es-AR", {
      style: "currency",
      currency: "ARS",
    });

    const imgproductos = document.createElement('img');
    imgproductos.src = producto.imagen;

    const contentContainer = document.createElement("div");
    contentContainer.classList.add("content-container");

    contentContainer.append(cardTitle, cardSubtitle,);

    let buttonAgregarCarrito = document.createElement ("button");
                buttonAgregarCarrito.innerText = `Agregar al carrito`;
                buttonAgregarCarrito.classList.add("btn-agregarCarrito");
                buttonAgregarCarrito.addEventListener('click', (e) => {
                    const button = e.target; 
                    const articleProducto = button.parentNode; 
                    const productoId = articleProducto.dataset.id;
                    for (let producto of productos){
                        if (producto.id == productoId){
                          agregarAlCarrito(producto);
                            break;
                        }
                    }
                });
    const vermasbutton = document.createElement("button");
    vermasbutton.classList.add("btn-dark");
    vermasbutton.classList.add("ver-mas");
    vermasbutton.innerText = "Ver más";

    cardBody.appendChild(imgproductos);
    cardBody.appendChild(contentContainer);
    cardBody.appendChild(buttonAgregarCarrito);
    cardBody.appendChild(vermasbutton); // Agregar el botón "Ver más" al cardBody
    card.appendChild(cardBody);
    contenedorcatalogo.appendChild(card);
    contenedorCatalogo.appendChild(contenedorcatalogo);
  });
  asignarEventosVerMas();
}

function asignarEventosVerMas() {
  const verMasButtons = document.querySelectorAll(".ver-mas");

  verMasButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const cardBody = button.parentNode;
      const card = cardBody.parentNode;
      const productoId = card.dataset.id;

      const producto = productos.find((producto) => producto.id == productoId);
      if (producto) {
        mostrarVentanaEmergente(producto);
      }
    });
  });
}
document.addEventListener("DOMContentLoaded", () => {
  const verMasButtons = document.querySelectorAll(".ver-mas");

  verMasButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const cardBody = button.parentNode;
      const card = cardBody.parentNode;
      const productoId = card.dataset.id;

      const producto = productos.find((producto) => producto.id == productoId);
      if (producto) {
        mostrarVentanaEmergente(producto);
      }
    });
  });
});
function mostrarVentanaEmergente(producto) {
  const ventanaEmergente = document.createElement("div");
  ventanaEmergente.classList.add("ventana-emergente");
  ventanaEmergente.dataset.id = producto.id;

  const contenidoVentana = document.createElement("div");
  contenidoVentana.classList.add("contenido-ventana");

  const closeButton = document.createElement("button");
  closeButton.classList.add("btn");
  closeButton.classList.add("btn-dark");
  closeButton.classList.add("cerrar-ventana");
  closeButton.innerText = "Cerrar";
  closeButton.addEventListener("click", () => {
    ventanaEmergente.remove();
  });

  const tituloProducto = document.createElement("h2");
  tituloProducto.innerText = producto.nombre;

  const imagenProducto = document.createElement("img");
  imagenProducto.src = producto.imagen;

  const descripcionProducto = document.createElement("p");
  descripcionProducto.innerText = producto.descripcion;

  const precioProducto = document.createElement("p");
  precioProducto.innerText = "Precio: " + (producto.precio).toLocaleString("es-AR", {
    style: "currency",
    currency: "ARS",
  });

  let buttonAgregarCarrito = document.createElement("button");
                buttonAgregarCarrito.innerText = `Agregar al carrito`;
                buttonAgregarCarrito.classList.add("btn-agregarCarrito");
                buttonAgregarCarrito.addEventListener('click', (e) => {
                  const button = e.target;
                  const card = button.parentNode.parentNode;
                  const productoId = card.dataset.id;
                    for (let producto of productos){
                      if (producto.id == productoId){
                          agregarAlCarrito(producto);
                            break;
                        }
                    }
                });

  contenidoVentana.append(
    closeButton,
    tituloProducto,
    imagenProducto,
    descripcionProducto,
    precioProducto,
    buttonAgregarCarrito,
  );

  ventanaEmergente.appendChild(contenidoVentana);
  document.body.appendChild(ventanaEmergente);
}

const mostrarCarritoButton = document.createElement("button");
mostrarCarritoButton.classList.add("btn");
mostrarCarritoButton.classList.add("btn-dark");
mostrarCarritoButton.innerText = "Mostrar carrito";
mostrarCarritoButton.addEventListener("click", () => {
  mostrarCarrito();
  const carritoDiv = document.getElementById("carrito"); // Limpiar el contenido previo del carrito

  carrito.forEach(producto => {
    const productoDiv = document.createElement("div");
    productoDiv.classList.add("producto-carrito");

    const nombreProducto = document.createElement("p");
    nombreProducto.innerText = producto.nombre;

    productoDiv.appendChild(nombreProducto);
    carritoDiv.appendChild(productoDiv);
  });
});
const contenedorBotones = document.getElementById("contenedor-botones");
contenedorBotones.appendChild(mostrarCarritoButton);

function mostrarCarrito() {
  if (carrito.length === 0) {
    alert("El carrito está vacío");
    return;
  }

  const ventanaEmergente = document.createElement("div");
  ventanaEmergente.classList.add("ventana-emergente");

  const contenidoVentana = document.createElement("div");
  contenidoVentana.classList.add("carritodecompras");
  contenidoVentana.setAttribute("id", "compras")

  const closeButton = document.createElement("button");
  closeButton.classList.add("btn");
  closeButton.classList.add("btn-dark");
  closeButton.classList.add("cerrar-ventana");
  closeButton.innerText = "Cerrar";
  closeButton.addEventListener("click", () => {
    ventanaEmergente.remove();
  });

  const tituloCarrito = document.createElement("h2");
  tituloCarrito.innerText = "Carrito de compras";

  const listaProductos = document.createElement("div");
  listaProductos.classList.add("lista-productos");

  const productosAgregados = {}; 
  let precioTotal = 0;

  carrito.forEach((producto, index) => {
    const productoKey = `${producto.nombre}_${producto.precio}`;
    if (!productosAgregados[productoKey]) {
      productosAgregados[productoKey] = true;

      const itemProducto = document.createElement("div");
      itemProducto.dataset.id = producto.id;
      itemProducto.classList.add("paraflex")

      const imagenProducto = document.createElement("img");
      imagenProducto.src = producto.imagen;
      imagenProducto.alt = producto.nombre;
      imagenProducto.classList.add("imagen-producto");

      const nombreProducto = document.createElement("h3");
      nombreProducto.innerText = producto.nombre;

      const preciosProducto = document.createElement("p");
      preciosProducto.innerText = `Precio: ${producto.precio}`;

      const cantidadProducto = document.createElement("span");
      cantidadProducto.dataset.index = index;
      cantidadProducto.innerText = `Cantidad: ${producto.cantidad}`;

      let buttonSumar = document.createElement("button");
                buttonSumar.innerText = `+`;
                buttonSumar.classList.add("btn-agregarCarrito");
                buttonSumar.addEventListener('click', (e) => {
                  const button = e.target;
                  const card = button.parentNode;
                  const productoId = card.dataset.id;
                    for (let producto of productos){
                      if (producto.id == productoId){
                          agregarAlCarrito(producto);
                          cantidadProducto.innerText = `Cantidad: ${producto.cantidad}`;
                            break;
                        }
                    }
                });

      const botonRestar = document.createElement("button");
      botonRestar.innerText = "-";
      botonRestar.classList.add("btn");
      botonRestar.classList.add("btn-warning");
      botonRestar.addEventListener("click", () => {
        let itemCarrito = document.getElementById("cantproductoshome");
        let precioFinal = document.getElementById("totalproductoshome");
        let preciofinalcarrito = document.getElementById("precio-total");
        if (producto.cantidad > 1) {
          producto.cantidad -= 1;
          cantidadProducto.innerText = `Cantidad: ${producto.cantidad}`;
          montoapagar -= producto.precio;
          preciofinalcarrito.innerText = `Precio total: ${montoapagar.toLocaleString("es-AR", {
            style: "currency",
            currency: "ARS",
          })}`
        }else{
          for (let i=0; i<carrito.length; i++){
          if(carrito[i].id == producto.id){
            montoapagar -= producto.precio;
            carrito.splice(i , 1);
            itemProducto.remove();
          }}
        }
        cantidadProductos--;

        if(preciofinalcarrito != null){
            preciofinalcarrito.innerText = `Precio total: ${montoapagar.toLocaleString("es-AR", {
              style: "currency",
              currency: "ARS",
            })}`
      }
      itemCarrito.innerText = cantidadProductos;
      precioFinal.innerText = montoapagar.toLocaleString();
      });

      itemProducto.appendChild(imagenProducto);
      itemProducto.appendChild(nombreProducto);
      itemProducto.appendChild(preciosProducto);
      itemProducto.appendChild(cantidadProducto);
      itemProducto.appendChild(buttonSumar);
      itemProducto.appendChild(botonRestar);
      listaProductos.appendChild(itemProducto);
    } else {
            const cantidadProducto = document.querySelector(`span[data-index="${index}"]`);
      if (cantidadProducto) {
        cantidadProducto.innerText = `Cantidad: ${producto.cantidad || 1}`;
      }
    }
    const cantidad = producto.cantidad || 1;
    precioTotal += producto.precio * cantidad;
  });

  const elementoPrecioTotal = document.createElement("p");
  elementoPrecioTotal.id = "precio-total";
  elementoPrecioTotal.innerText = `Precio total: ${precioTotal.toLocaleString("es-AR", {
    style: "currency",
    currency: "ARS",
  })}`;

  const buttonvaciarcarrito = document.createElement("button");
      buttonvaciarcarrito.innerText = "Vaciar Carrito";
      buttonvaciarcarrito.classList.add("vaciarcarrito")
      buttonvaciarcarrito.addEventListener("click", () => {
        carrito = [];
        montoapagar = 0;
        cantidadProductos = 0;
        listaProductos.innerHTML = "";
        let itemCarrito = document.getElementById("cantproductoshome");
  let precioFinal = document.getElementById("totalproductoshome");
  let preciofinalcarrito = document.getElementById("precio-total");
  if( preciofinalcarrito != null){
    preciofinalcarrito.innerText = "Precio total:" + montoapagar.toLocaleString("es-AR", {
      style: "currency",
      currency: "ARS",
    });
}
 itemCarrito.innerText = cantidadProductos;
 precioFinal.innerText = montoapagar.toLocaleString("es-AR", {
  style: "currency",
  currency: "ARS",
});
ventanaEmergente.remove();
      })
  contenidoVentana.appendChild(tituloCarrito);
  contenidoVentana.appendChild(listaProductos);
  contenidoVentana.appendChild(elementoPrecioTotal);
  contenidoVentana.appendChild(closeButton);
  contenidoVentana.appendChild(buttonvaciarcarrito);
  ventanaEmergente.appendChild(contenidoVentana);
  document.body.appendChild(ventanaEmergente);
}