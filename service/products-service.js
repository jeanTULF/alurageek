const listaProductos = () => 
fetch("https://alurageek-api-fake.vercel.app/productos").then((respuesta) => respuesta.json());

const crearProducto = (urlImagen, categoria, nombre, precio, descripcion) => {
    return fetch ("https://alurageek-api-fake.vercel.app/productos", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({id: uuid.v4(), nombre, urlImagen, categoria, precio, descripcion }), 
    })
};

const eliminarProducto = (id) => {
    return fetch(`https://alurageek-api-fake.vercel.app/productos/${id}`, {
    method: "DELETE",
});
};

const detalleProducto = (id) => {
    return fetch(`https://alurageek-api-fake.vercel.app/productos/${id}`).then((respuesta) => 
    respuesta.json());
};

const categoriaProductoDiversos = () => {
    return fetch(`https://alurageek-api-fake.vercel.app/productos?categoria=Diversos`).then((respuesta) => 
    respuesta.json());
}

const categoriaProductoConsolas = () => {
    return fetch(`https://alurageek-api-fake.vercel.app/productos?categoria=Consolas`).then((respuesta) => 
    respuesta.json());
}

const categoriaProductoSW = () => {
    return fetch(`https://alurageek-api-fake.vercel.app/productos?categoria=Starwars`).then((respuesta) => 
    respuesta.json());
}


const actualizarProducto = (urlImagen, categoria, nombre, precio, descripcion, id) => {
    return fetch(`https://alurageek-api-fake.vercel.app/productos/${id}`, {
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
    actualizarProducto,
    categoriaProductoDiversos,
    categoriaProductoConsolas,
    categoriaProductoSW
};

