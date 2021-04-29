const btnClose = document.querySelector('.btn-close');
const btnOpen = document.querySelector('.btn-open');
const hidden = document.querySelector('.hidden-2');
const show = document.querySelector('.show');
const menuMobile = document.querySelector('.navigation__mobile');
const body = document.querySelector('body');

btnOpen.addEventListener('click', () => {
    menuMobile.classList.remove('hidden-2');
    body.style.overflowY = "hidden";
    btnOpen.classList.add('hidden-2');
    btnClose.classList.add('show');

});

btnClose.addEventListener('click', () => {
    if (!menuMobile.classList.contains('hidden-2')) {
        menuMobile.classList.add('hidden-2');
        body.style.overflowY = "visible";
        btnOpen.classList.remove('hidden-2');
        btnClose.classList.remove('show');

    }
})