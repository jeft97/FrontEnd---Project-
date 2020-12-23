//element.addEventListener('event', function, )
window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        header.classList.toggle('rola', window.scrollY > 0);
    })
    /**Remova uma classe: element.classList.toggle ("classToRemove", false);
    Adicione uma classe: element.classList.toggle ("classToAdd", true); */
$(document).ready(function() {
    $('#menu-mobile').click(function() {

        if ($('.menu-mobile a').attr('class') == 'br-mobile') {

            $('#menu-mobile').css('opacity', '0');
            $('.nav-menu-mobile').css('left', '0');
        }
    });

    $('#btn-close').click(function() {
        if ($('.btn-close a').attr('class') == 'bar-close-mobile') {

            $('.nav-menu-mobile').css('left', '-100%');
            $('#menu-mobile').css('opacity', '1');

        }

    });
});
$(window).scroll(function() {
    var heigth = $(window).scrollTop();
    if (heigth > 1600) {
        $('#topbar').fadeIn();
    } else {
        $('#topbar').fadeOut();
    }

});
$(document).ready(function(event) {
    $('#topbar').click(function(e) {
        e.preventDefault();
        $("html, body").animate({
            scrollTop: 0
        }, 1100)
        return false;
    });
});