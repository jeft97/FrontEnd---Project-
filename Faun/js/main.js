// open the window efect menu mobile
const btnOpen = document.querySelector('.hearder-btn-menu');
let menu = document.querySelector('.menu-mobile');
btnOpen.addEventListener('click', function() {
    menu.classList.add('menu-mobileViews');
})

// close the window efect menu mobile
const btnClose = document.querySelector('.btn-mobile-close');
btnClose.addEventListener('click', () => {
    menu.classList.remove('menu-mobileViews');

})