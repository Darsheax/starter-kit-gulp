import Splide from '@splidejs/splide';

if(document.querySelector('.c-article')){
    new Splide( '.splide', {
        perPage: 3,
        rewind: true,
        gap: "20px",
        breakpoints: {
            768: {
                perPage: 2
            },
            360: {
                perPage: 1
            }
        }
    }).mount();
}