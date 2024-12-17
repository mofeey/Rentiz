export async function initProducts(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Error loading data");
        const data = await response.json();

        renderProducts(data);
    } catch (error) {
        console.error(error);
    }
}

function renderProducts(data) {
    const productsContainer = document.querySelector(".popular-products__slides");

    if (productsContainer) {
        productsContainer.innerHTML = "";

        data.forEach((card) => {
            if (!card.image || !card.name || !card.location) {
                console.warn("Missing data for card:", card);
                return;
            }
            const productCard = document.createElement("div");
            productCard.className = "popular-products__slide swiper-slide";
            productCard.dataset.id = card.id;

            productCard.innerHTML = `
                <div class="popular-card">
                    <picture>
                        <source srcset="./img/popular-slider/popular-house-${card.image}.webp 1x, ./img/popular-slider/popular-house-${card.image}_@2x.webp 2x, ./img/popular-slider/popular-house-${card.image}_@3x.webp 3x" type="image/webp" />
                        <source srcset="./img/popular-slider/popular-house-${card.image}.jpg 1x, ./img/popular-slider/popular-house-${card.image}_@2x.jpg 2x, ./img/popular-slider/popular-house-${card.image}_@3x.jpg 3x" type="image/jpeg" />
                        <img class="popular-card__img" src="./img/popular-slider/popular-house-${card.image}.jpg" alt="${card.name}" loading="lazy" width="460px" height="auto" />
                    </picture>
                    <div class="popular-card__info">
                        <h3 class="popular-card__title title">${card.name}</h3>
                        <p class="text popular-card__location">${card.location}</p>
                        <div class="popular-card__features">
                            <div class="popular-card__feature">
                                <svg>
                                    <use href="./img/svgsprite/sprite.symbol.svg#card-bed"></use>
                                </svg>
                                ${card.beds} beds
                            </div>
                            <div class="popular-card__feature">
                                <svg>
                                    <use href="./img/svgsprite/sprite.symbol.svg#card-bath"></use>
                                </svg>
                                ${card.bath} bath
                            </div>
                            <div class="popular-card__feature">
                                <svg>
                                    <use href="./img/svgsprite/sprite.symbol.svg#card-square"></use>
                                </svg>
                                ${card.sqft} Sqft.
                            </div>
                        </div>
                    </div>
                </div>
            `;
            productsContainer.appendChild(productCard);
        });
    }
}
