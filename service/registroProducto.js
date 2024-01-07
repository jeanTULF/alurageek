import { productsService } from "./products-service.js";

const form = document.querySelector("[data-form]");


form.addEventListener('submit', (e) =>{
    e.preventDefault();
    const urlImagen = document.querySelector("[data-url]").value;
    const categoria = document.querySelector("[data-categoria]").value;
    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;
    const descripcion = document.querySelector("[data-descripcion]").value;

            productsService
            .crearProducto(urlImagen, categoria, nombre, precio, descripcion)
            .then(() => {
                window.location.href = "productos-admin.html";      
        })
        .catch((error) => {
            console.log('Error al agregar el producto:', error);
        });
});

