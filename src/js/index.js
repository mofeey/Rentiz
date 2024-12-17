// -----Global----- //
// Data
import { initFilters } from "./modules/filterSearch/filterData";
import { initProducts } from "./modules/products/productsData";

// Utils

// Navigation
import { initMobileMenu, UpdateMobileNav } from "./modules/mobileMenu";
import { initNavServices } from "./modules/navDropdown";
import { initFilterSearch } from "./modules/filterSearch/filterEvents";

// Sliders
import { initializePopularSlider } from "./utils/swiperSlider";
// Other modules

// -----Initialization----- //
document.addEventListener("DOMContentLoaded", () => {
    initMobileMenu();
    initNavServices();

    initFilters("./public/data/filter.json");
    initFilterSearch();
    initProducts("./public/data/popularProducts.json");
    initializePopularSlider();

    
    // AOS and Fancybox initialization
    // AOS.init();
    // Fancybox.bind('[data-fancybox="share-gallery"]', {});
});

window.addEventListener("resize", () => {
    UpdateMobileNav();
});
