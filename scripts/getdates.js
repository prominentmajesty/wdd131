const currentYear = new Date().getFullYear();

// Find the first paragraph in the footer and update it with the copyright year
const copyrightParagraph = document.querySelector('footer p:first-of-type');
if (copyrightParagraph) {
    copyrightParagraph.innerHTML = `&copy; ${currentYear} 🌺 Augustine Ugochukwu Ugochukwu 🌺 BYU`;
}

// Get the last modified date
const lastModified = "5/12/2025 12:13:33";

// Find the second paragraph in the footer and update it with the last modified date
const lastModifiedParagraph = document.querySelector('footer h5:first-of-type');
if (lastModifiedParagraph) {
    lastModifiedParagraph.textContent = `Last Modified: ${lastModified}`;
}