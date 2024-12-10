// -----Global----- //
// Data

// Utils

// Navigation
import { initMobileMenu, UpdateMobileNav } from "./modules/mobileMenu";
import { initFilterSearch } from "./modules/filterSearch";

// Sliders

// Other modules

// -----Initialization----- //
document.addEventListener("DOMContentLoaded", () => {
    initMobileMenu();
    initFilterSearch();


    
    // AOS and Fancybox initialization
    // AOS.init();
    // Fancybox.bind('[data-fancybox="share-gallery"]', {});
});

window.addEventListener("resize", () => {
    UpdateMobileNav();
});
