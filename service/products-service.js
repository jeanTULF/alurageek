const listaProductos = () => 
fetch("http://localhost:3000/productos").then((respuesta) => respuesta.json());

const crearProducto = (urlImagen, categoria, nombre, precio, descripcion) => {
    return fetch ("http://localhost:3000/productos", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({id: uuid.v4(), nombre, urlImagen, categoria, precio, descripcion }), 
    })
};

const eliminarProducto = (id) => {
    return fetch(`http://localhost:3000/productos/${id}`, {
    method: "DELETE",
});
};






export const productsService = {
    crearProducto,
    listaProductos,
    eliminarProducto
}