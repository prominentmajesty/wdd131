// Example data for tips and recipes
const tips = [
    {
        title: "Stay Hydrated",
        img: "images/water.jpg",
        desc: "Drink at least 8 glasses of water a day to keep your body hydrated and healthy."
    },
    {
        title: "Get Moving",
        img: "images/moving.jpg",
        desc: "Aim for at least 30 minutes of physical activity daily for optimal health."
    }
];

const recipes = [
    {
        title: "Avocado Toast",
        img: "images/avacado.jpg",
        desc: "Whole grain toast topped with smashed avocado, cherry tomatoes, and a sprinkle of seeds."
    },
    {
        title: "Berry Yogurt Parfait",
        img: "images/cherry.jpg",
        desc: "Layer Greek yogurt with fresh berries and granola for a quick, healthy breakfast."
    }
];

// Render tips
function renderTips() {
    const container = document.getElementById('tips-container');
    if (!container) return;
    container.innerHTML = tips.map(tip => `
        <div class="tip-card">
            <img src="${tip.img}" alt="${tip.title}" loading="lazy">
            <h3>${tip.title}</h3>
            <p>${tip.desc}</p>
        </div>
    `).join('');
}

// Render recipes
function renderRecipes() {
    const container = document.getElementById('recipes-container');
    if (!container) return;
    container.innerHTML = recipes.map(recipe => `
        <div class="recipe-card">
            <img src="${recipe.img}" alt="${recipe.title}" loading="lazy">
            <h3>${recipe.title}</h3>
            <p>${recipe.desc}</p>
        </div>
    `).join('');
}

// Example of DOM interaction, event, array methods, template literals, and localStorage
function trackVisit() {
    let visits = Number(localStorage.getItem('hlhVisits')) || 0;
    visits++;
    localStorage.setItem('hlhVisits', visits);
    // Optionally display somewhere: document.getElementById('visitCount').textContent = visits;
}

document.addEventListener('DOMContentLoaded', () => {
    renderTips();
    renderRecipes();
    trackVisit();
});