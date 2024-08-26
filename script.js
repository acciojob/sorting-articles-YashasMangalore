//your JS code here. If required.
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

// Function to strip articles from the band names
function stripArticle(bandName) {
    return bandName.replace(/^(a |an |the )/i, '').trim();
}

// Sort the bands array ignoring the articles
const sortedBands = bands.sort((a, b) => stripArticle(a) > stripArticle(b) ? 1 : -1);

// Select the 'bands' ul element
const ul = document.getElementById('bands');

// Populate the ul with sorted band names
ul.innerHTML = sortedBands.map(band => `<li>${band}</li>`).join('');