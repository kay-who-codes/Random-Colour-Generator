/* Basic Reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    color: #333;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    text-align: center;
    flex-direction: column;
    transition: background-color 0.3s, color 0.3s;
}

body.dark-mode {
    background-color: #333;
    color: #fff;
}

/* Container styles */
.container, .colour-compare-container {
    background-color: #fff;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 300px;
    margin: 0 0 50px 0; /* 50px spacing between elements */
}

body.dark-mode .container, body.dark-mode .colour-compare-container {
    background-color: #444;
}

/* Colour preview */
.colour-preview {
    width: 150px;
    height: 150px;
    margin: 20px auto;
    border-radius: 50%;
    background-color: #ccc;
}

/* Button styles */
button {
    background-color: #4CAF50;
    color: white;
    border: none;
    padding: 10px 20px;
    margin: 5px;
    cursor: pointer;
    border-radius: 5px;
    font-size: 16px;
    transition: background-color 0.3s;
}

button:hover {
    background-color: #45a049;
}

button:active {
    background-color: #388e3c;
}

#generate-color {
    background-color: #005f8d;
}

#generate-color:hover {
    background-color: #004c75;
}

.buttons button {
    background-color: #2196F3;
}

.buttons button:hover {
    background-color: #1976D2;
}

/* Dark Mode Buttons */
body.dark-mode button {
    background-color: #555;
    color: #fff;
}

body.dark-mode button:hover {
    background-color: #666;
}

/* Theme Toggle */
.theme-toggle {
    margin-top: 60px;
}

#theme-switcher {
    position: absolute;
    top: -9999px;
}

.toggle-label {
    background-color: #2196F3;
    color: white;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 5px;
    font-size: 18px;
}

body.dark-mode .toggle-label {
    background-color: #888;
}

/* Colour Compare styles */
.compare-preview {
    display: flex;
    justify-content: space-between;
}

.compare-preview div {
    width: 45%;
    height: 100px;
    margin: 5px;
    border-radius: 5px;
}
