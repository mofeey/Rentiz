import { isMobile } from "../../utils/isMobile";
import { hasTouchSupport } from "../../utils/hasTouchSupport";

export function initFilterSearch() {
    const filterContainer = document.querySelector(".filter");

    if (!filterContainer) return;

    filterContainer.addEventListener("click", (e) => handleFilterClick(e));
}

function handleFilterClick(e) {
    const target = e.target;
    const filterItem = target.closest(".filter__item");
    const filterItems = target.closest(".filter").querySelectorAll(".filter__item");

    // Mobile behavior
    if (isMobile() && hasTouchSupport()) {
        if (filterItem) {
            if (filterItem.classList.contains("_active")) {
                handleFilterValueUpdate(target);
                filterItem.classList.remove("_active");
                return;
            }

            filterItems.forEach((item) => item.classList.remove("_active"));
            filterItem.classList.add("_active");
        }
    }

    if (target.closest(".filter-dropdown__item")) {
        handleFilterValueUpdate(target);
    }
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
