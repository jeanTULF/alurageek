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

const detalleProducto = (id) => {
    return fetch(`http://localhost:3000/productos/${id}`).then((respuesta) => 
    respuesta.json());
};

const actualizarProducto = (urlImagen, categoria, nombre, precio, descripcion, id) => {
    return fetch(`http://localhost:3000/productos/${id}`, {
        method: "PUT",
        headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({ urlImagen, categoria, nombre, precio, descripcion }),
    })
    .then((respuesta) => respuesta)
    .catch((err) => console.log(err));
};




export const productsService = {
    crearProducto,
    listaProductos,
    eliminarProducto,
    detalleProducto,
    actualizarProducto
}