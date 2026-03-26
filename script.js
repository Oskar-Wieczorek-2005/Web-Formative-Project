document.addEventListener('DOMContentLoaded', () => {
    // Buttons and elements
    const themeBtn = document.getElementById('btn-theme');
    const soundBtn = document.getElementById('btn-sound');
    const textBtn = document.getElementById('btn-text');
    const btnHello = document.getElementById("btnHello");
    const output = document.getElementById("output");
    const statusEl = document.getElementById("status");
    const clickTimeTpl = document.getElementById("clickTimeTpl");

    // State
    let isDarkMode = false;
    let isSoundOn = true;
    let textSizeIndex = 1; 
    const textSizes = ['12px', '16px', '24px'];
    const textSizeLabels = ['Small', 'Normal', 'Large'];

    // Toggle Functions
    function toggleTheme() {
        isDarkMode = !isDarkMode;
        document.body.classList.toggle('dark-theme', isDarkMode);
        themeBtn.innerText = `Dark Mode: ${isDarkMode ? 'On' : 'Off'}`;
    }

    function toggleSound() {
        isSoundOn = !isSoundOn;
        soundBtn.innerText = `Sound: ${isSoundOn ? 'On' : 'Off'}`;
    }

    function cycleTextSize() {
        textSizeIndex = (textSizeIndex + 1) % textSizes.length;
        document.documentElement.style.setProperty('--game-font-size', textSizes[textSizeIndex]);
        textBtn.innerText = `Text Size: ${textSizeLabels[textSizeIndex]}`;
    }

    // Listeners
    if (themeBtn) themeBtn.addEventListener('click', toggleTheme);
    if (soundBtn) soundBtn.addEventListener('click', toggleSound);
    if (textBtn) textBtn.addEventListener('click', cycleTextSize);
});