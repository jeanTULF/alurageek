import { productsService } from "../service/products-service.js";

const crearNuevoProducto = (nombre, urlImagen, categoria, precio, descripcion, id) => {
    const espacio = document.createElement("li");
    espacio.classList.add('productos__container-item');
    const contenido = `
        <img src="${urlImagen}">
        <p>${nombre}</p>
        <p>$ ${precio}</p>
        <p>${id}</p>
        <p>${descripcion}</p>
    `;
    espacio.innerHTML = contenido;
    return espacio;
}


const list = document.querySelector("[data-list]");

productsService.listaProductos().then((data) => {
    data.forEach(({ nombre, urlImagen, categoria, precio, descripcion, id }) => {
        const nuevoProducto = crearNuevoProducto(nombre, urlImagen, categoria, precio, descripcion, id);
    list.appendChild(nuevoProducto);
    });
})
.catch((error) => Swal.fire({
    title: 'Error',
    text: 'Ocurrió un error',
    icon: 'error',
    confirmButtonText: 'Aceptar',
    allowOutsideClick: false,
    customClass: {
        confirmButton: 'botonswal'
    }
}));