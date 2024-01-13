// let nombre = document.querySelector("[data-nombre-form]");
// let email = document.querySelector("[data-email-form]");
// const formulario = document.querySelector("data-formulario");

// formulario.addEventListener('submit', (e) => {
//     if(!regex.test(nombre.value)){
//         alert(`el nombre ${nombre.value} no es valido`);
//         e.preventDefault();
//     } else {
//         Swal.fire({
//             title: 'Envio exitoso',
//             text: '¡Formulario enviado correctamente!',
//             icon: 'success',
//             showConfirmButton: false,
//             allowOutsideClick: false
//         });
//     }
// });


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

    const errorContainer = input.parentElement.querySelector(".error-msj");

    if (input.validity.valid) {
        input.parentElement.classList.remove("active");
        errorContainer.innerHTML = "";  // Limpiar el mensaje de error
    } else {
        input.parentElement.classList.add("active");
        errorContainer.innerHTML = mostrarMensajeDeError(tipoDeInput, input);
    }

};



//validacion formulario input 

const name = document.querySelector("data-nombre");
const url = document.querySelector("data-url");
