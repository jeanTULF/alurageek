import { productsService } from "../service/products-service.js"


//Productos por categoria
const listDiversos = document.querySelector("[data-listdiversos]");
const listConsolas = document.querySelector("[data-consolas]");
const listStarWars = document.querySelector("[data-starwars]");

productsService.categoriaProductoDiversos().then((data => {
    
    data.slice(0, 6).forEach(({nombre, urlImagen, precio, id}) => {
        const listItem = document.createElement("li");
        listItem.classList.add('productos__container-item')
        const contenido = `
        <img src="${urlImagen}">
        <p>${nombre}</p>
        <p>$ ${precio}</p>
        <a href="/screens/producto.html?id=${id}">Ver producto</a>
        `
        listItem.innerHTML = contenido;
        listDiversos.appendChild(listItem)
    })

}));

productsService.categoriaProductoConsolas().then((data) => {

    data.slice(0, 6).forEach(({nombre, urlImagen, precio, id}) => {
        const listItem = document.createElement("li");
        listItem.classList.add('productos__container-item')
        const contenido = `
        <img src="${urlImagen}">
        <p>${nombre}</p>
        <p>$ ${precio}</p>
        <a href="/screens/producto.html?id=${id}">Ver producto</a>
        `
        listItem.innerHTML = contenido;
        listConsolas.appendChild(listItem)
    })
});

productsService.categoriaProductoSW().then((data) => {

    data.slice(0, 6).forEach(({nombre, urlImagen, precio, id}) => {
        const listItem = document.createElement("li");
        listItem.classList.add('productos__container-item')
        const contenido = `
        <img src="${urlImagen}">
        <p>${nombre}</p>
        <p>$ ${precio}</p>
        <a href="/screens/producto.html?id=${id}">Ver producto</a>
        `
        listItem.innerHTML = contenido;
        listStarWars.appendChild(listItem)
    })
})