document.addEventListener('DOMContentLoaded', () => {
    // Buttons and elements
    const themeBtn = document.getElementById('btn-theme');
    const soundBtn = document.getElementById('btn-sound');
    const textBtn = document.getElementById('btn-text');

    // State
    let isDarkMode = false;
    let isSoundOn = true;
    let textSizeIndex = 1; // Default to 'Normal'
    
    // Configuration for text sizes
    const textSizes = ['12px', '16px', '22px'];
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
        // Cycle through the 3 sizes
        textSizeIndex = (textSizeIndex + 1) % textSizes.length;
        
        // Apply the new size to the root element
        document.documentElement.style.setProperty('--game-font-size', textSizes[textSizeIndex]);
        
        // Update button text
        textBtn.innerText = `Text Size: ${textSizeLabels[textSizeIndex]}`;
    }

    // Listeners
    if (themeBtn) themeBtn.addEventListener('click', toggleTheme);
    if (soundBtn) soundBtn.addEventListener('click', toggleSound);
    if (textBtn) textBtn.addEventListener('click', cycleTextSize);
});