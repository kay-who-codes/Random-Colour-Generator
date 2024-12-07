function generateRandomColor() {
    // Generate random RGB values
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    // Convert to Hex code
    const hexColor = rgbToHex(r, g, b);

    // Get color name (basic approach: using a predefined set of names)
    const colorName = getColorName(r, g, b);

    // Update the display with the new colour info
    document.getElementById("color-preview").style.backgroundColor = hexColor;
    document.getElementById("color-name").textContent = colorName;
    document.getElementById("hex-code").textContent = hexColor;

    // Update RGB values in the span (used for copying)
    document.getElementById("rgb").textContent = `rgb(${r}, ${g}, ${b})`;
}

function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1).toUpperCase();
}

function getColorName(r, g, b) {
    // Simple approach for demo: return a colour name based on RGB
    // You can expand this with a library or more complex logic
    if (r > g && r > b) {
        return 'Red';
    } else if (g > r && g > b) {
        return 'Green';
    } else if (b > r && b > g) {
        return 'Blue';
    }
    return 'Unknown Colour';
}

function copyText(type) {
    let textToCopy = '';
    if (type === 'color-name') {
        textToCopy = document.getElementById("color-name").textContent;
    } else if (type === 'hex-code') {
        textToCopy = document.getElementById("hex-code").textContent;
    } else if (type === 'rgb') {
        textToCopy = document.getElementById("rgb").textContent;
    }

    // Use the Clipboard API to copy the text
    navigator.clipboard.writeText(textToCopy).then(() => {
        alert("Copied to clipboard!");
    }).catch(err => {
        alert("Failed to copy text!");
    });
}
