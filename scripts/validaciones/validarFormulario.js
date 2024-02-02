const formulario = document.querySelector('.footer__form');
 let regex = /^[a-zA-Z\s]+$/;
 
 formulario.addEventListener('submit', (e) => {
      if(!regex.test(nombre.value)){
        Swal.fire({
            title: 'Error',
            text: 'El nombre colocado no es válido',
            icon: 'error',
            confirmButtonText: 'Aceptar',
            allowOutsideClick: false,
            customClass: {
                confirmButton: 'botonswal'
            }
        });
          e.preventDefault();
      } else {
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
          });
          Toast.fire({
            icon: "success",
            title: "¡Formulario enviado exitosamente!",
            background: '#f1f1f1'
          });
      }
 });

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

function mostrarMensajeDeError(tipoDeInput, input) {
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

    if (input.validity.valid) {
        input.parentElement.classList.remove("active");
        input.parentElement.querySelector(".error-msj").innerHTML = ""
    } else {
        input.parentElement.classList.add("active");
        input.parentElement.querySelector(".error-msj").innerHTML = mostrarMensajeDeError(tipoDeInput, input);
    }
};