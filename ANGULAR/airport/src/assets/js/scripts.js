// scripts.js

// Espera a que el documento esté cargado completamente
document.addEventListener("DOMContentLoaded", function() {
    // Inicializa el carousel utilizando jQuery
    $('#carouselHistoria').carousel();

    // Agrega la funcionalidad para el control de los botones del carousel
    $('.carousel-control-prev').click(function() {
        $('#carouselHistoria').carousel('prev');
    });

    $('.carousel-control-next').click(function() {
        $('#carouselHistoria').carousel('next');
    });
});
