// import Splide from '@splidejs/splide';

new Splide( '.splide' ).mount();

document.addEventListener( 'DOMContentLoaded', function() {

    var splide = new Splide( '.splide', {
        type     : 'loop',
        height   : '10rem',
        focus    : 'center',
        autoWidth: true,
    } );

    splide.mount();
} );