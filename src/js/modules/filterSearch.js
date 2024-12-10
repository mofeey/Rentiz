import { isMobile } from "./utils/isMobile";
import { hasTouchSupport } from "./utils/hasTouchSupport";

export function initFilterSearch() {
    const filterContainer = document.querySelector(".filter");

    if (!filterContainer) return;

    filterContainer.addEventListener("click", (e) => handleFilterClick(e));
}

function handleFilterClick(e) {
    const target = e.target;
    // Mobile behavior
    if (isMobile() && hasTouchSupport()) {
        const filterItem = target.closest(".filter__item");
        if (filterItem) {
            filterItem.classList.toggle("_active");
        }
    }
    // Common rule for both mobile and desktop
    handleFilterValueUpdate(target);
}

function handleFilterValueUpdate(target) {
    const dropdownItem = target.closest(".filter-dropdown__item");

    if (!dropdownItem) return; 

    const filterItem = dropdownItem.closest(".filter__item");
    const filterValue = filterItem.querySelector(".filter__value");

    if (!filterItem || !filterValue) return; 

    if (dropdownItem.dataset.state === "default") {
        filterValue.textContent = "Choose";
    } else {
        filterValue.textContent = dropdownItem.textContent;
    }

    const dropdownItems = filterItem.querySelectorAll(".filter-dropdown__item");
    dropdownItems.forEach((item) => item.classList.remove("_disabled"));

    dropdownItem.classList.add("_disabled");
}
