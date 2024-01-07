const crearProducto = (urlImagen, categoria, nombre, precio, descripcion) => {
    return fetch ("http://localhost:3000/productos", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({id: uuid.v4(), nombre, urlImagen, categoria, precio, descripcion }), 
    })
};





export const productsService = {
    crearProducto
}