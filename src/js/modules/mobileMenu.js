import { isMobile } from "./utils/isMobile";

const mobileMenu = document.querySelector(".mobile-menu");
const mobileBtn = document.querySelector("#mobile-btn");
const overlay = document.querySelector(".overlay");

function initMobileMenu() {
    if (mobileMenu && mobileBtn && overlay) {
        mobileBtn.addEventListener("click", toggleMobileMenu);
        overlay.addEventListener("click", closeMobileMenu);
        mobileMenu.addEventListener("click", function(e) {
            const target = e.target;

            const targetElement = target.closest(".mobile-services");
            if (targetElement) {
                targetElement.classList.toggle("_active");
            } else {
                closeMobileMenu();
            }

            if (target.closest(".mobile-services__item")) {
                closeMobileMenu();
            }
        });
    }
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle("_active");
    overlay.classList.toggle("_active");
    mobileBtn.classList.toggle("_active");

    const isOpen = mobileMenu.classList.contains("_active");
    mobileBtn.setAttribute("aria-expanded", isOpen);
    if (isOpen) {
        mobileBtn.querySelector(".visually-hidden").innerText = "Close mobile menu";
    }

    closeAllDropdowns();
}

function openMobileMenu() {
    mobileMenu.classList.add("_active");
    overlay.classList.add("_active");
    mobileBtn.classList.add("_active");
    mobileBtn.setAttribute("aria-expanded", "true");
    mobileBtn.querySelector(".visually-hidden").innerText = "Close mobile menu";
}

function closeMobileMenu() {
    mobileMenu.classList.remove("_active");
    overlay.classList.remove("_active");
    mobileBtn.classList.remove("_active");
    mobileBtn.setAttribute("aria-expanded", "false");
    mobileBtn.querySelector(".visually-hidden").innerText = "Open mobile menu";

    closeAllDropdowns();
}

function closeAllDropdowns() {
    const dropdowns = mobileMenu.querySelectorAll(".mobile-services._active");
    dropdowns.forEach((dropdown) => {
        dropdown.classList.remove("_active");
    });
}

export { initMobileMenu };

export function UpdateMobileNav() {
    if (!isMobile() && window.innerWidth >= 768) {
        if (mobileMenu.classList.contains("_active")) {
            mobileMenu.classList.remove("_active");
            // htmlContainer.classList.remove("no-scroll");----------------------------------
        }
    }
}
