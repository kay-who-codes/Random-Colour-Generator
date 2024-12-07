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
    '0,255,0': 'Lime',
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
    document.getElementById('hex-code').innerText = hex;
    document.getElementById('rgb').innerText = `RGB(${r}, ${g}, ${b})`;
    document.getElementById('color-name').innerText = colorName;

    // Update the buttons' labels
    document.getElementById('copy-color-name').innerText = `Colour: ${colorName}`;
    document.getElementById('copy-hex').innerText = `Hex Code: ${hex}`;
    document.getElementById('copy-rgb').innerText = `RGB: RGB(${r}, ${g}, ${b})`;

    // Generate harmonious colours
    generateHarmoniousColors(r, g, b);
}

// Convert RGB to Hex
function rgbToHex(r, g, b) {
    return `#${(1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1).toUpperCase()}`;
}

// Function to find the nearest colour name
function getColorName(rgb) {
    // If the exact RGB exists, return it
    if (colorNames[rgb]) {
        return colorNames[rgb];
    }

    // Otherwise, find the closest match
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

// Generate two harmonious colours based on the primary colour
function generateHarmoniousColors(r, g, b) {
    // Color harmony theory: For simplicity, we'll generate complementary and analogous colours.

    // Complementary color (opposite on the colour wheel)
    let compR = 255 - r;
    let compG = 255 - g;
    let compB = 255 - b;

    // Analogous colors (side by side on the colour wheel)
    let analogousR1 = (r + 30) % 256;
    let analogousG1 = (g + 30) % 256;
    let analogousB1 = (b + 30) % 256;

    let analogousR2 = (r - 30 + 256) % 256;
    let analogousG2 = (g - 30 + 256) % 256;
    let analogousB2 = (b - 30 + 256) % 256;

    // Set the harmonious colour previews
    document.getElementById('harmonious-color-1').style.backgroundColor = rgbToHex(analogousR1, analogousG1, analogousB1);
    document.getElementById('harmonious-color-2').style.backgroundColor = rgbToHex(analogousR2, analogousG2, analogousB2);
    document.getElementById('compare-color-preview').style.backgroundColor = rgbToHex(compR, compG, compB);
}

// Copy text to clipboard
function copyText(type) {
    const text = document.getElementById(type).innerText;
    navigator.clipboard.writeText(text).then(() => {
        alert('Copied to clipboard!');
    });
}

// Toggle between dark and light modes
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
}

// Initialize with a random color
generateRandomColor();
