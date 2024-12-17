
export async function initFilters(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Error loading data");
        const data = await response.json();

        renderFilters(data);
    } catch (error) {
        console.error(error);
    }
}

function renderFilters(data) {
    const locationsContainer = document.querySelector("#locations");
    const houseTypesContainer = document.querySelector("#type");

    const locations = data.locations;
    const houseTypes = data.houseTypes;

    // Render Locations
    if (locationsContainer) {
        locations.forEach((location) => {
            const li = document.createElement("li");
            li.className = "filter-dropdown__item";
            li.textContent = location.name;
            li.dataset.id = location.id;
            locationsContainer.appendChild(li);
        });
    }
    // Render HouseTypes
    if (houseTypesContainer) {
        houseTypes.forEach((location) => {
            const li = document.createElement("li");
            li.className = "filter-dropdown__item";
            li.textContent = location.name;
            li.dataset.id = location.id;
            houseTypesContainer.appendChild(li);
        });
    }
}
