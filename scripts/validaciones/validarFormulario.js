let nombre = document.getElementById("nombre");
let formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (e) => {
    if(!regex.test(nombre.value)){
        alert(`el nombre ${nombre.value} no es valido`)
        
        e.preventDefault()
    } else {
        alert("se ha enviado el formulario correctamente")
    }
});

/*
const tipoDeErrores = [
    "valueMissing",
    "patternMismatch",
    "typeMismatch"
]

const mensajesDeError = {
    nombre: {
        valueMissing: "El campo nombre no puede estar vacío"
    },
    email: {
        valueMissing: "El campo correo no puede estar vacío",
        typeMismatch: "El correo no es valido"
    },
    mensaje: {
        valueMissing: "El campo mensaje no puede estar vacío"
    }
}

function mostrarMensajeDeError (tipoDeInput, input) {
    let mensaje = "";
    tipoDeErrores.forEach(error => {
        if(input.validity[error]){
            console.log(input.validity[error]);
            console.log(mensajesDeError[tipoDeInput][error]);
            mensaje = mensajesDeError[tipoDeInput][error];
        }
    })
    return mensaje;
}

export function valida(input) {
    const tipoDeInput = input.dataset.tipo;
    if(validadores[tipoDeInput]) {
        validadores[tipoDeInput](input)
    }

    if(input.validity.valid) {
        input.parentElement.classList.remove("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = ""
    }else {
        input.parentElement.classList.add("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = mostrarMensajeDeError(tipoDeInput, input);
    }

}*/