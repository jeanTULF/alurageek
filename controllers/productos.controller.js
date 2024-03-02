import { productsService } from "../service/products-service.js";

const crearNuevoProducto = (nombre, urlImagen, precio, descripcion, id) => {
    const espacio = document.createElement("li");
    espacio.classList.add('productos__container-item');
    const contenido = `
    <div class="productos__container-img">
        <img src="${urlImagen}">
        <div class="icon-container">
                    <button class="delete" type="button" id=${id}><i class="bi bi-trash-fill icon1"></i></button>
                    <a href="/editar-producto.html?id=${id}" id=${id} class="edit"><i class="bi bi-pencil-fill icon2" data-update></i></a>
                </div>
        </div>
        <p>${nombre}</p>
        <p>$ ${precio}</p>
        <p>${descripcion}</p>
    `;
    espacio.innerHTML = contenido;
    //eliminar elemento
    const btn = espacio.querySelector("button");
    btn.addEventListener("click", () => {
        const id = btn.id;
        Swal.fire({
            title: '¿Estás seguro de eliminar este producto?',
            text: 'Esta acción no se puede deshacer',
            icon: 'warning',
            showCancelButton: true,
            allowOutsideClick: false,
            confirmButtonText: 'Sí, eliminar',
            cancelButtonText: 'Cancelar',
            customClass: {
                confirmButton: 'confirmswal',  
                cancelButton: 'cancelswal'    
              },
          }).then((result) => {
            if (result.isConfirmed) {
              productsService
                .eliminarProducto(id)
                .then((respuesta) => {
                    Swal.fire({
                        title: '¡Producto eliminado!',
                        icon: 'success',
                        allowOutsideClick: false,
                        showConfirmButton: false,
                        
                      });
                  console.log(respuesta);
                  setTimeout(() => {
                    location.reload();
                  }, 2000);
                })
                .catch((err) => Swal.fire('Error', 'Ocurrió un error al eliminar el producto', 'error'));
            } else if (result.dismiss === Swal.DismissReason.cancel) {
              // No hacer nada si el usuario cancela
            }
          });
    });
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