const colorNames = {
    0: 'Black', 255: 'White', 255: 'Red', 0: 'Green', 0: 'Blue',
    255: 'Yellow', 255: 'Magenta', 255: 'Cyan', 128: 'Gray',
    255: 'Orange', 255: 'Pink', 255: 'Brown', 255: 'Purple',
    255: 'Lime', 255: 'Teal', 128: 'Olive', 255: 'Violet',
    128: 'Indigo', 0: 'Maroon', 255: 'Coral'
    // Add as many colours as needed.
};

function generateRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    const hexColor = rgbToHex(r, g, b);
    const colorName = getColorName(r, g, b);

    document.getElementById("color-preview").style.backgroundColor = hexColor;
    document.getElementById("color-name").textContent = colorName;
    document.getElementById("hex-code").textContent = hexColor;
    document.getElementById("rgb").textContent = `rgb(${r}, ${g}, ${b})`;
}

function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1).toUpperCase();
}

function getColorName(r, g, b) {
    // In practice, we could use a full library, but this example uses a simple lookup.
    return colorNames[r] || colorNames[g] || colorNames[b] || 'Unknown Colour';
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
