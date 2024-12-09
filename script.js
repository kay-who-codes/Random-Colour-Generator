function generateRandomColor() {
    // Generate a random primary colour
    const primaryColor = generateHexColor();

    // Find harmonious colours
    const harmoniousColors = generateHarmoniousColors(primaryColor);

    // Update the primary colour section
    updateColorDetails('color-preview', 'color-name', 'hex-code', 'copy-color-name', 'copy-hex', 'copy-rgb', primaryColor);

    // Update harmonious colour sections
    updateColorDetails('harmonious-preview-1', 'harmonious-name-1', 'harmonious-hex-1', 'copy-harmonious-name-1', 'copy-harmonious-hex-1', null, harmoniousColors[0]);
    updateColorDetails('harmonious-preview-2', 'harmonious-name-2', 'harmonious-hex-2', 'copy-harmonious-name-2', 'copy-harmonious-hex-2', null, harmoniousColors[1]);
}

// Generate a random hex colour
function generateHexColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Generate harmonious colours (triadic scheme for simplicity)
function generateHarmoniousColors(baseHex) {
    const baseRgb = hexToRgb(baseHex);
    const harmoniousRgb1 = rotateHue(baseRgb, 120);
    const harmoniousRgb2 = rotateHue(baseRgb, 240);
    return [rgbToHex(harmoniousRgb1), rgbToHex(harmoniousRgb2)];
}

// Rotate hue (basic RGB shifting for demonstration)
function rotateHue([r, g, b], angle) {
    return [(r + angle) % 256, (g + angle) % 256, (b + angle) % 256];
}

// Update colour details in the UI
function updateColorDetails(previewId, nameId, hexId, nameButtonId, hexButtonId, rgbButtonId, colorHex) {
    const rgbValue = hexToRgb(colorHex);
    const colorName = getColourName(colorHex);

    document.getElementById(previewId).style.backgroundColor = colorHex;
    document.getElementById(nameId).textContent = colorName;
    document.getElementById(hexId).textContent = colorHex;

    // Update buttons
    document.getElementById(nameButtonId).textContent = `Colour: ${colorName}`;
    document.getElementById(hexButtonId).textContent = `Hex: ${colorHex}`;
    if (rgbButtonId) {
        document.getElementById(rgbButtonId).textContent = `RGB: ${rgbValue}`;
        document.getElementById(rgbButtonId).setAttribute('data-copy', rgbValue);
    }
}

// Get a colour name (basic mapping, can be expanded)
function getColourName(hex) {
    const basicColours = {
        '#FF0000': 'Red',
        '#00FF00': 'Green',
        '#0000FF': 'Blue',
        '#FFFF00': 'Yellow',
        '#FFA500': 'Orange',
        '#800080': 'Purple'
    };
    return basicColours[hex.toUpperCase()] || 'Custom Colour';
}

// Convert hex to RGB array
function hexToRgb(hex) {
    const bigint = parseInt(hex.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return [r, g, b];
}

// Convert RGB array to hex
function rgbToHex([r, g, b]) {
    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`;
}

// Copy text to the clipboard
function copyText(elementId) {
    const element = document.getElementById(elementId);
    const text = element.getAttribute('data-copy') || element.textContent;
    navigator.clipboard.writeText(text).then(
        () => alert(`Copied: ${text}`),
        (err) => alert(`Failed to copy: ${err}`)
    );
}
