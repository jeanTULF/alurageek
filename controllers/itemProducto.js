import { productsService } from "../service/products-service.js";

const container = document.querySelector('.producto')

const similares = document.querySelector('.similares__container-list')


const obtenerInformacion = async () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");
  
    if (id === null) {
      window.location.href = "/screens/error.html";
    }

  try {
    const producto = await productsService.detalleProducto(id)

    console.log(producto)

    const espacio = document.createElement('article');
    espacio.classList.add('producto__container')
    const productoInfo = `
    <img src=${producto.urlImagen} alt=${producto.nombre}>
                <div class="producto__container-detalles">
                    <h2>${producto.nombre}</h2>
                    <strong>$ ${producto.precio}</strong>
                    <p>${producto.descripcion}</p>
                </div>
    `;
    espacio.innerHTML = productoInfo;
    container.appendChild(espacio)

  } catch (error) {
    window.location.href = "/screens/error.html";
  }

  
};

obtenerInformacion();


productsService.categoriaProductoSW().then((data) => {

  data.slice(0, 6).forEach(({nombre, urlImagen, precio, id}) => {
      const listItem = document.createElement("li");
      listItem.classList.add('similares__container-item')
      const contenido = `
      <img src="${urlImagen}">
      <p>${nombre}</p>
      <p>$ ${precio}</p>
      <a href="/screens/producto.html?id=${id}">Ver producto</a>
      `
      listItem.innerHTML = contenido;
      similares.appendChild(listItem)
  })
})
