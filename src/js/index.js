// -----Global----- //
// Data
import { initFilters } from "./modules/filterSearch/filterData";
// Utils

// Navigation
import { initMobileMenu, UpdateMobileNav } from "./modules/mobileMenu";
import { initNavServices } from "./modules/navDropdown";
import { initFilterSearch } from "./modules/filterSearch/filterEvents";

// Sliders

// Other modules

// -----Initialization----- //
document.addEventListener("DOMContentLoaded", () => {
    initMobileMenu();
    initNavServices();
    initFilterSearch();
    initFilters();

    // AOS and Fancybox initialization
    // AOS.init();
    // Fancybox.bind('[data-fancybox="share-gallery"]', {});
});

window.addEventListener("resize", () => {
    UpdateMobileNav();
});
