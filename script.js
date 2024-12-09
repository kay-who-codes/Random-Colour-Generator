// Generate a random primary colour
function generateRandomColor() {
    const primaryColor = generateHexColor();

    // Find harmonious colours
    const harmoniousColors = generateHarmoniousColors(primaryColor);

    // Update the primary colour section
    updateColorDetails('color-preview', 'hex-code', 'copy-hex', 'copy-rgb', primaryColor);

    // Update harmonious colour sections
    if (harmoniousColors.length === 2) {
        updateColorDetails('harmonious-preview-1', 'harmonious-hex-1', 'copy-harmonious-hex-1', 'copy-harmonious-rgb-1', harmoniousColors[0]);
        updateColorDetails('harmonious-preview-2', 'harmonious-hex-2', 'copy-harmonious-hex-2', 'copy-harmonious-rgb-2', harmoniousColors[1]);
    }
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

// Generate harmonious colours using HSL
function generateHarmoniousColors(baseHex) {
    const [h, s, l] = hexToHsl(baseHex); // Convert base hex to HSL

    // Calculate harmonious colours by rotating the hue
    const harmoniousHsl1 = [(h + 120) % 360, s, l]; // Rotate by 120°
    const harmoniousHsl2 = [(h + 240) % 360, s, l]; // Rotate by 240°

    // Convert back to hex
    return [hslToHex(harmoniousHsl1), hslToHex(harmoniousHsl2)];
}

// Convert hex to HSL
function hexToHsl(hex) {
    const [r, g, b] = hexToRgb(hex).map(v => v / 255); // Normalise RGB to [0, 1]

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const delta = max - min;

    let h = 0;
    if (delta !== 0) {
        if (max === r) h = ((g - b) / delta + (g < b ? 6 : 0)) * 60;
        else if (max === g) h = ((b - r) / delta + 2) * 60;
        else h = ((r - g) / delta + 4) * 60;
    }

    const l = (max + min) / 2;
    const s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

    return [Math.round(h), Math.round(s * 100), Math.round(l * 100)];
}

// Convert HSL to hex
function hslToHex([h, s, l]) {
    const c = (1 - Math.abs(2 * l / 100 - 1)) * (s / 100);
    const x = c * (1 - Math.abs((h / 60) % 2 - 1));
    const m = l / 100 - c / 2;

    let [r, g, b] = [0, 0, 0];
    if (h >= 0 && h < 60) [r, g, b] = [c, x, 0];
    else if (h >= 60 && h < 120) [r, g, b] = [x, c, 0];
    else if (h >= 120 && h < 180) [r, g, b] = [0, c, x];
    else if (h >= 180 && h < 240) [r, g, b] = [0, x, c];
    else if (h >= 240 && h < 300) [r, g, b] = [x, 0, c];
    else if (h >= 300 && h < 360) [r, g, b] = [c, 0, x];

    return rgbToHex([(r + m) * 255, (g + m) * 255, (b + m) * 255].map(Math.round));
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

// Update colour details in the UI
function updateColorDetails(previewId, hexId, hexButtonId, rgbButtonId, colorHex) {
    const rgbValue = hexToRgb(colorHex);

    // Null checks for elements
    const previewElement = document.getElementById(previewId);
    const hexElement = document.getElementById(hexId);
    const hexButton = document.getElementById(hexButtonId);
    const rgbButton = document.getElementById(rgbButtonId);

    if (previewElement) previewElement.style.backgroundColor = colorHex;
    if (hexElement) hexElement.textContent = colorHex;
    if (hexButton) {
        hexButton.textContent = `Hex: ${colorHex}`;
        hexButton.setAttribute('data-copy', colorHex);
    }
    if (rgbButton) {
        rgbButton.textContent = `RGB: ${rgbValue.join(', ')}`;
        rgbButton.setAttribute('data-copy', rgbValue.join(', '));
    }
}

// Copy text to the clipboard
function copyText(elementId) {
    const element = document.getElementById(elementId);
    if (!element) {
        alert('Element not found!');
        return;
    }

    const text = element.getAttribute('data-copy') || element.textContent;
    navigator.clipboard.writeText(text).then(
        () => alert(`Copied: ${text}`),
        (err) => alert(`Failed to copy: ${err}`)
    );
}
