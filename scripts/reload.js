//recarga pagina de incio 

const recarga = document.querySelector('.header__item-logo');

recarga.addEventListener('click', () => {
    console.log("se va a recargar la página");
    window.location.reload();
})