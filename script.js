// Expanded list of color names
const colorNames = {
    '0,0,0': 'Black',        // RGB(0, 0, 0)
    '255,255,255': 'White',  // RGB(255, 255, 255)
    '255,0,0': 'Red',        // RGB(255, 0, 0)
    '0,255,0': 'Green',      // RGB(0, 255, 0)
    '0,0,255': 'Blue',       // RGB(0, 0, 255)
    '255,255,0': 'Yellow',   // RGB(255, 255, 0)
    '255,0,255': 'Magenta',  // RGB(255, 0, 255)
    '0,255,255': 'Cyan',     // RGB(0, 255, 255)
    '128,128,128': 'Gray',   // RGB(128, 128, 128)
    '255,165,0': 'Orange',   // RGB(255, 165, 0)
    '255,192,203': 'Pink',   // RGB(255, 192, 203)
    '139,69,19': 'Brown',    // RGB(139, 69, 19)
    '128,0,128': 'Purple',   // RGB(128, 0, 128)
    '0,255,0': 'Lime',       // RGB(0, 255, 0)
    '0,128,128': 'Teal',     // RGB(0, 128, 128)
    '128,128,0': 'Olive',    // RGB(128, 128, 0)
    '238,130,238': 'Violet', // RGB(238, 130, 238)
    '75,0,130': 'Indigo',    // RGB(75, 0, 130)
    '128,0,0': 'Maroon',     // RGB(128, 0, 0)
    '255,127,80': 'Coral',   // RGB(255, 127, 80)
    '64,224,208': 'Turquoise', // RGB(64, 224, 208)
    '245,245,220': 'Beige',    // RGB(245, 245, 220)
    '0,0,128': 'Navy',         // RGB(0, 0, 128)
    '255,215,0': 'Gold',       // RGB(255, 215, 0)
    '192,192,192': 'Silver',   // RGB(192, 192, 192)
    '221,160,221': 'Plum',     // RGB(221, 160, 221)
    '54,69,79': 'Charcoal',    // RGB(54, 69, 79)
    '255,218,185': 'Peach',    // RGB(255, 218, 185)
    '230,230,250': 'Lavender', // RGB(230, 230, 250)
    '0,255,127': 'Emerald',    // RGB(0, 255, 127)
    '210,180,140': 'Tan',      // RGB(210, 180, 140)
    '189,252,201': 'Mint',     // RGB(189, 252, 201)
    '220,20,60': 'Crimson',    // RGB(220, 20, 60)
    '255,0,255': 'Fuchsia',    // RGB(255, 0, 255)
    '70,130,180': 'Steel Blue', // RGB(70, 130, 180)
    '176,224,230': 'Powder Blue', // RGB(176, 224, 230)
    '0,139,139': 'Dark Cyan', // RGB(0, 139, 139)
    '255,99,71': 'Tomato',    // RGB(255, 99, 71)
    '255,240,245': 'Snow',    // RGB(255, 240, 245)
    '255,228,181': 'Papaya Whip' // RGB(255, 228, 181)
};

// Function to generate random colour and update the UI
function generateRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    const rgb = `${r},${g},${b}`;
    const hexColor = rgbToHex(r, g, b);
    const colorName = getClosestColorName(r, g, b);

    // Update the UI with the generated colour info
    document.getElementById("color-preview").style.backgroundColor = hexColor;
    document.getElementById("color-name").textContent = colorName;
    document.getElementById("hex-code").textContent = hexColor;
    document.getElementById("rgb").textContent = `rgb(${r}, ${g}, ${b})`;
}

// Convert RGB to Hex format
function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1).toUpperCase();
}

// Function to calculate Euclidean distance between two RGB colours
function calculateDistance(r1, g1, b1, r2, g2, b2) {
    return Math.sqrt(Math.pow(r2 - r1, 2) + Math.pow(g2 - g1, 2) + Math.pow(b2 - b1, 2));
}

// Function to find the closest color name based on RGB values
function getClosestColorName(r, g, b) {
    let closestColorName = 'Unknown Colour';
    let closestDistance = Infinity;

    // Loop through all the colors in the list
    for (let rgb in colorNames) {
        const [colorR, colorG, colorB] = rgb.split(',').map(Number);
        const distance = calculateDistance(r, g, b, colorR, colorG, colorB);

        // If the current color is closer, update the closest color and distance
        if (distance < closestDistance) {
            closestDistance = distance;
            closestColorName = colorNames[rgb];
        }
    }

    return closestColorName;
}

// Copy text to clipboard
function copyText(type) {
    let textToCopy = '';
    if (type === 'color-name') {
        textToCopy = document.getElementById("color-name").textContent;
    } else if (type === 'hex-code') {
        textToCopy = document.getElementById("hex-code").textContent;
    } else if (type === 'rgb') {
        textToCopy = document.getElementById("rgb").textContent;
    }

    // Use the Clipboard API for copying text
    navigator.clipboard.writeText(textToCopy).then(() => {
        alert("Copied to clipboard!");
    }).catch(err => {
        alert("Failed to copy text!");
    });
}

// Dark Mode Toggle
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
}
