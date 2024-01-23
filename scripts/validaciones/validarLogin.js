

document.getElementById("login-form").addEventListener("submit", (e) => {
    e.preventDefault();

    const tipoDeErrores = [
        "valueMissing",
        "typeMismatch",
        "patternMismatch",
    ];

    const mensajesDeError = {
        email: {
            valueMissing: "El campo correo no puede estar vacío",
            typeMismatch: "El correo no es valido"
        },
        password: {
            valueMissing: "El campo contraseña no puede estar vacío",
            patternMismatch: "Al menos 6 caracteres, máximo 12, debe contener una letra minúscula, una letra mayúscula, un número y no puede contener caracteres especiales."
        }
    }

    // Obtiene los valores de los campos
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Realiza la validación 
    if (email === "usuario@example.com" && password === "contraseña_segura") {
        Swal.fire({
            title: 'Inicio de sesión exitoso',
            text: '¡Bienvenido de nuevo!',
            icon: 'success',
            showConfirmButton: false,
            allowOutsideClick: false
        });
        document.querySelector(`.form__msj-error`).classList.remove('form__msj-error-activo');
        setTimeout(() => {
        window.location.href = "./productos-admin.html";
        }, 1500);
    } else {
        Swal.fire({
            title: 'Error',
            text: 'Correo electrónico o contraseña incorrectos.',
            icon: 'error',
            confirmButtonText: 'Aceptar',
            allowOutsideClick: false,
            customClass: {
                confirmButton: 'botonswal'
            }
        });
        document.querySelector(`.form__msj-error`).classList.add('form__msj-error-activo')
        
    }
});
