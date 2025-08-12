const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",

        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },

    {
        templeName: "Burley Idaho Temple",
        location: "Burley, Idaho, United States",
        dedicated: "4 June 2022",
        area: "116642",
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },

    {
        templeName: "Binin City Nigerian Temple",
        location: "Binin City Nigerian Temple",
        dedicated: "24 May 2025",
        area: "2852",
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/benin-city-nigeria-temple/benin-city-nigeria-temple-58575-main.jpg"
    },

    {
        templeName: "Kinshasa Democratic Republic of the Congo Temple",
        location: "Kinshasa, Democratic Republic of the Congo",
        dedicated: "2025, May, 25",
        area: "5000",
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/kinshasa-democratic-republic-of-the-congo-temple/kinshasa-democratic-republic-of-the-congo-temple-3533-main.jpg"
    },
    // Add more temple objects here...
];

function getArea(temple) {
    return typeof temple.area === "string" ? parseInt(temple.area.replace(/,/g, "")) : temple.area;
}


function getYear(temple) {
    const match = temple.dedicated.match(/^(\d{4})/) || temple.dedicated.match(/(\d{4})$/);
    return match ? parseInt(match[1]) : 0;
}

function createCard(temple) {
    const card = document.createElement('div');
    card.className = 'temple-card';

    card.innerHTML = `
            <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
            <div class="temple-info">
                <h3>${temple.templeName}</h3>
                <p><strong>Location:</strong> ${temple.location}</p>
                <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
                <p><strong>Area:</strong> ${temple.area} m²</p>
            </div>
        `;
    return card;
}

var grid = document.querySelector('.album-grid');
document.addEventListener('DOMContentLoaded', function () {
    if (!grid) return;
    temples.forEach(temple => {
        grid.appendChild(createCard(temple));
    });

    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function (e) {

            e.preventDefault();
            const filter = this.textContent.trim();
            let filtered = temples;

            if (filter === "Old") {
                filtered = temples.filter(t => getYear(t) < 1900);
                grid.innerHTML = '';
                filtered.map(t => grid.appendChild(createCard(t)));

            } else if (filter === "New") {
                filtered = temples.filter(t => getYear(t) > 2000);
                console.log("New Temples:", filtered);
                grid.innerHTML = '';
                filtered.map(t => grid.appendChild(createCard(t)));

            } else if (filter === "Large") {
                filtered = temples.filter(t => getArea(t) > 90000);
                grid.innerHTML = '';
                filtered.map(t => grid.appendChild(createCard(t)));

            } else if (filter === "Small") {
                filtered = temples.filter(t => getArea(t) < 10000);
                grid.innerHTML = '';
                filtered.map(t => grid.appendChild(createCard(t)));

            } else {
                filtered = temples; // Reset to all temples
                grid.innerHTML = '';
                filtered.map(t => grid.appendChild(createCard(t)));
            }
            // grid.innerHTML = '';
            // temples.forEach(t => {
            //     grid.appendChild(createCard(t));
            // });
        });
    });
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
