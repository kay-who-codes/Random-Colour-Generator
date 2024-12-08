function generateRandomColor() {
    // Generate a random colour
    const randomColor = generateHexColor();

    // Update the primary colour section
    const colorPreview = document.getElementById('color-preview');
    const colorNameSpan = document.getElementById('color-name');
    const hexCodeSpan = document.getElementById('hex-code');
    const rgbValue = hexToRgb(randomColor);

    colorPreview.style.backgroundColor = randomColor;
    colorNameSpan.textContent = "Custom Name"; // Replace with real colour name logic if needed
    hexCodeSpan.textContent = randomColor;

    // Update the RGB button text
    const rgbButton = document.getElementById('copy-rgb');
    rgbButton.textContent = `RGB: ${rgbValue}`;
}

// Function to generate a random hex colour
function generateHexColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to convert hex to RGB
function hexToRgb(hex) {
    const bigint = parseInt(hex.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `${r}, ${g}, ${b}`;
}

// Function to copy text to the clipboard
function copyText(elementId) {
    const text = document.getElementById(elementId).textContent;
    navigator.clipboard.writeText(text).then(
        () => alert(`Copied: ${text}`),
        (err) => alert('Failed to copy text: ', err)
    );
}
