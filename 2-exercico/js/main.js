window.addEventListener('scroll', function() {
    const header = document.querySelector('.header--roll');
    header.classList.toggle('roll', window.scrollY > 0);
    let imgChange = document.querySelector('.header__logo');
    (window.scrollY > 0) ? imgChange.src = `img/logo--2.png`: imgChange.src = `img/logo.png`;

});

// animation scroll
const elements = document.querySelectorAll('.header__menu--sub');


for (let index = 0; index < elements.length; ++index) {
    elements[index].addEventListener('click', scrollToIdOnClick);
}


function scrollToIdOnClick(event) {
    event.preventDefault(); // serve per togliere il comportamento standard di evento 
    const element = event.target; // serve per prendere l'emento che voglio in ogni click, come this

    const id = element.getAttribute('href'); //serve per prendere id preciso di ogni elemento che si trova nella ancora con # davanti

    const to = document.querySelector(id).offsetTop; // serve per prendere il valore preciso della posizione del scroll

    window.scroll({
        top: to - 20, // to - valore da sotraire caso il menu è troppo vicino 
        behavior: "smooth" // serve per lasciare il scrool suave
    });
}