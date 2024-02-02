import { valida } from "./validaciones/validarFormulario.js"; 

const container = document.querySelector('.footer__form');
const inputs = container.querySelectorAll('input');

inputs.forEach( input => {
    input.addEventListener('blur', (input) => {
        valida(input.target);
    });
});