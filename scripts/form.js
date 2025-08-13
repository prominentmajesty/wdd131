const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

// Populate product select options
document.addEventListener('DOMContentLoaded', () => {
    const select = document.getElementById('productName');
    if (select) {
        products.forEach(product => {
            const option = document.createElement('option');
            option.value = product.id;
            option.textContent = product.name.charAt(0).toUpperCase() + product.name.slice(1);
            select.appendChild(option);
        });
    }
});

const year_current = new Date().getFullYear();
const copyrightParagraph = document.querySelector('footer p:first-of-type');
if (copyrightParagraph) {
    copyrightParagraph.innerHTML = `&copy; ${year_current} 🌺 Augustine Ugochukwu Odoemene 🌺 Nigeria`;
}

const lastModified = document.lastModified;
const formattedDate = new Date(lastModified).toLocaleString();

const lastModifiedParagraph = document.querySelector('footer h5:first-of-type');
if (lastModifiedParagraph) {
    lastModifiedParagraph.textContent = `Last Modified: ${formattedDate}`;
}