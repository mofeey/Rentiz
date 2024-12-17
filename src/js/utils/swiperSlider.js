// popularSlider
export function initializePopularSlider() {
    const popularSlider = new Swiper(".popular-products__slider", {
        direction: "horizontal",
        observeParents: true,
        observer: true,
        // loop: true,
        slidesPerView: "1",
        spaceBetween: 20,
        speed: 1000,
        watchOverflow: true,
        parallax: true,
        // autoplay: {
        //     delay: 5000,
        //     disableOnInteraction: false,
        // },
        navigation: {
            nextEl: ".popular-products__arrow_next",
            prevEl: ".popular-products__arrow_prev",
        },

        breakpoints: {
            576: {
                slidesPerView: "auto",
            },
        },
    });
    // document.querySelector(".popular-products").style.opacity = "1";
    return popularSlider;
}
