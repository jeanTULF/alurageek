const searchbar = document.querySelector('.header__item-searchbar-input');

const resultBox = document.querySelector('.result-box');

searchbar.addEventListener('focus', (e) => {
    resultBox.style.display = "flex";
})

searchbar.addEventListener('blur', (e) => {
    resultBox.style.display = "none";
})