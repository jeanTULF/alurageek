import { productsService } from "../service/products-service.js";

const searchbar = document.querySelector('.header__item-searchbar-input');

const resultBox = document.querySelector('.result-box');

searchbar.addEventListener('keyup', (e) => {
    resultBox.style.display = "flex";
    let input = searchbar.value.toLowerCase();

    if(input.length){
        productsService.listaProductos().then((data) => {
            let resultado = data.filter((producto) => {
                return producto.nombre.toLowerCase().includes(input);
            });
            console.log(resultado);

            // Borra los resultados anteriores
            resultBox.innerHTML = '';

            // Selecciona el <ul> después de borrar los resultados anteriores
            const ul = document.createElement('ul');

            resultado.slice(0, 6).forEach((producto) => {
                const resultadoElemento = document.createElement('li')
                const contenido = `
                    <p>${producto.nombre}</p>
                    <img src=${producto.urlImagen} alt=${producto.nombre}>
                `
                resultadoElemento.innerHTML = contenido;

                resultadoElemento.addEventListener('click', () => {

                    // Construye la URL con el ID del producto y redirige a la página producto.html
                    const url = `/screens/producto.html?id=${producto.id}`;
                    window.location.href = url;
                });
                ul.appendChild(resultadoElemento);
            });

            // Agrega el <ul> con los nuevos resultados al resultBox
            resultBox.appendChild(ul);
        });
    } else {
        resultBox.innerHTML = '';
    }
});


