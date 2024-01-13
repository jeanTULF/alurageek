import { valida } from "./validaciones/validarFormulario.js"; 

const inputs = document.querySelectorAll('input');

inputs.forEach( input => {
    input.addEventListener('blur', (input) => {
        valida(input.target);
    });
});