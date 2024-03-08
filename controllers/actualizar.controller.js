import { productsService } from "../service/products-service.js";

const formulario = document.querySelector("[data-form]");

const obtenerInformacion = async () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");
  
    if (id === null) {
      window.location.href = "./screens/error.html";
    }

    const urlImagen = document.querySelector("[data-url]");
    const categoria = document.querySelector("[data-categoria]");
    const nombre = document.querySelector("[data-nombre]");
    const precio = document.querySelector("[data-precio]");
    const descripcion = document.querySelector("[data-descripcion]");

  try {
    const producto = await productsService.detalleProducto(id)
    if (producto.nombre && producto.urlImagen && producto.categoria && producto.precio &&
        producto.descripcion) {
    nombre.value = producto.nombre;
    urlImagen.value = producto.urlImagen;
    categoria.value = producto.categoria;
    precio.value = producto.precio;
    descripcion.value = producto.descripcion;
  } else {
    throw new Error();
  }
  } catch (error) {
    window.location.href = "/screens/error.html";
  }

  
};

obtenerInformacion();

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const url = new URL(window.location);
    const id = url.searchParams.get("id");
  
    const urlImagen = document.querySelector("[data-url]").value;
    const categoria = document.querySelector("[data-categoria]").value;
    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;
    const descripcion = document.querySelector("[data-descripcion]").value;
    productsService.actualizarProducto(urlImagen, categoria, nombre, precio, descripcion, id).then(() => {
      window.location.href = "./screens/edicion_concluida.html";
    });
  });