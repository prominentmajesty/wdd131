
// Static weather values matching the displayed content
const temperature = 10; // °C
const windSpeed = 18; // km/h
const units = 'C'; // Change to 'F' for Fahrenheit

// Windchill calculation for Celsius or Fahrenheit
function calculateWindChill(temp, wind, units) {
    return (units === 'C')
        ? (wind > 4.8 && temp <= 10 ? Math.round(13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16)) + ' °C' : 'N/A')
        : (wind > 3 && temp <= 50 ? Math.round(35.74 + 0.6215 * temp - 35.75 * Math.pow(wind, 0.16) + 0.4275 * temp * Math.pow(wind, 0.16)) + ' °F' : 'N/A');
}

// Display windchill in the weather section
document.addEventListener('DOMContentLoaded', function () {
    const windchillSpan = document.getElementById('windchill');
    if (windchillSpan) {
        windchillSpan.textContent = calculateWindChill(temperature, windSpeed, units);
    }
});

const year_current = new Date().getFullYear();
const copyrightParagraph = document.querySelector('footer p:first-of-type');
if (copyrightParagraph) {
    copyrightParagraph.innerHTML = `&copy; ${year_current} 🌺 Augustine Ugochukwu Odoemene 🌺 Nigeria`;
}
//
// Get the last modified date.
const lastModified = document.lastModified;
const formattedDate = new Date(lastModified).toLocaleString();
// Find the second paragraph in the footer and update it with the last modified date
const lastModifiedParagraph = document.querySelector('footer h5:first-of-type');
if (lastModifiedParagraph) {
    lastModifiedParagraph.textContent = `Last Modified: ${formattedDate}`;
}
