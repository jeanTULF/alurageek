import { productsService } from "./products-service.js";

const form = document.querySelector("[data-form]");
let regexNumero = /^[0-9.]+$/;
let precio = document.querySelector("[data-precio]");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if(!regexNumero.test(precio.value)) {
        console.log("Error precio");
        alert('Error en el formulario, ingrese correctamente los datos');
    } else {
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
        
    }
});