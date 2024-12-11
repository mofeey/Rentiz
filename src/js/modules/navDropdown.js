export function initNavServices() {
    const navContainer = document.querySelector(".nav__list");
    const services = navContainer.querySelector(".services");

    if (navContainer) {
        document.addEventListener("click", (e) => {
            const target = e.target;

            if (target.closest(".services")) {
                services.classList.toggle("_active");
            } else {
                services.classList.remove("_active");
            }
        });
    }
}
