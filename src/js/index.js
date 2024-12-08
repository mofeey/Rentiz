// -----Global----- //
// Data

// Utils

// Navigation
import { initMobileMenu, UpdateMobileNav } from "./modules/mobileMenu";


// Sliders

// Other modules

// -----Initialization----- //
document.addEventListener("DOMContentLoaded", () => {
    initMobileMenu();

    // AOS and Fancybox initialization
    // AOS.init();
    // Fancybox.bind('[data-fancybox="share-gallery"]', {});
});

window.addEventListener("resize", () => {
    UpdateMobileNav();
});