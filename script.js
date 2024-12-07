// List of color names
const colorNames = {
    '0,0,0': 'Black',
    '255,255,255': 'White',
    '255,0,0': 'Red',
    '0,255,0': 'Green',
    '0,0,255': 'Blue',
    '255,255,0': 'Yellow',
    '255,0,255': 'Magenta',
    '0,255,255': 'Cyan',
    '128,128,128': 'Gray',
    '255,165,0': 'Orange',
    '255,192,203': 'Pink',
    '139,69,19': 'Brown',
    '128,0,128': 'Purple',
    '0,128,0': 'Lime',
    '0,128,128': 'Teal',
    '128,128,0': 'Olive',
    '238,130,238': 'Violet',
    '75,0,130': 'Indigo',
    '128,0,0': 'Maroon',
    '255,127,80': 'Coral',
    '64,224,208': 'Turquoise',
    '245,245,220': 'Beige',
    '0,0,128': 'Navy',
    '255,215,0': 'Gold',
    '192,192,192': 'Silver',
    '221,160,221': 'Plum',
    '54,69,79': 'Charcoal',
    '255,218,185': 'Peach',
    '230,230,250': 'Lavender',
    '0,255,127': 'Emerald',
    '210,180,140': 'Tan',
    '189,252,201': 'Mint',
    '220,20,60': 'Crimson',
    '255,0,255': 'Fuchsia',
    '70,130,180': 'Steel Blue',
    '176,224,230': 'Powder Blue',
    '0,139,139': 'Dark Cyan',
    '255,99,71': 'Tomato',
    '255,240,245': 'Snow',
    '255,228,181': 'Papaya Whip'
};

// Function to generate a random colour
function generateRandomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    let rgb = `${r},${g},${b}`;
    let hex = rgbToHex(r, g, b);
    let colorName = getColorName(rgb);

    // Update the colour preview and information
    document.getElementById('color-preview').style.backgroundColor = hex;
    document.getElementById('copy-color-name').innerText = `Colour: ${colorName}`;
    document.getElementById('copy-hex').innerText = `Hex Code: ${hex}`;
    document.getElementById('copy-rgb').innerText = `RGB: ${rgb}`;

    // Generate and display harmonious colours
    generateHarmoniousColors(hex);
}

// Convert RGB to Hex
function rgbToHex(r, g, b) {
    return `#${(1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1).toUpperCase()}`;
}

// Function to find the nearest colour name
function getColorName(rgb) {
    if (colorNames[rgb]) {
        return colorNames[rgb];
    }
    let closestMatch = 'Unknown Colour';
    let minDistance = Infinity;

    for (let color in colorNames) {
        let [r, g, b] = color.split(',').map(Number);
        let distance = Math.sqrt(Math.pow(r - rgb.split(',')[0], 2) + Math.pow(g - rgb.split(',')[1], 2) + Math.pow(b - rgb.split(',')[2], 2));
        if (distance < minDistance) {
            minDistance = distance;
            closestMatch = colorNames[color];
        }
    }
    return closestMatch;
}

// Copy text to clipboard
function copyText(type) {
    const text = document.getElementById(type).innerText.split(': ')[1]; // Extracting the colour value
    navigator.clipboard.writeText(text).then(() => {
        alert('Copied to clipboard!');
    });
}

// Toggle between dark and light modes
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
}

// Function to generate harmonious colours
function generateHarmoniousColors(hex) {
    // Convert hex to RGB
    const rgb = hexToRgb(hex);

    // Generate complementary colours
    const complementary1 = adjustColour(rgb, 20); // Shift hue slightly
    const complementary2 = adjustColour(rgb, -20); // Shift hue slightly in opposite direction

    // Set the harmonious colours in the compare preview
    document.getElementById('harmonious-color-1').style.backgroundColor = rgbToHex(...complementary1);
    document.getElementById('harmonious-color-2').style.backgroundColor = rgbToHex(...complementary2);
}

// Convert Hex to RGB
function hexToRgb(hex) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return [r, g, b];
}

// Adjust colour by shifting RGB values (creating harmonious colours)
function adjustColour(rgb, amount) {
    return rgb.map(value => Math.min(Math.max(value + amount, 0), 255)); // Prevent out-of-bounds values
}

// Initialize with a random color
generateRandomColor();
