let nombre = document.getElementById("nombre");
let formulario = document.getElementById("formulario");
const regex = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
const inputs = document.querySelectorAll('#formulario input');

formulario.addEventListener("submit", (e) => {
    if(!regex.test(nombre.value)){
        alert(`el nombre ${nombre.value} no es valido`)
        
        e.preventDefault()
    } else {
        alert("se ha enviado el formulario correctamente")
    }
});