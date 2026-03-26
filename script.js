document.addEventListener('DOMContentLoaded', () => {
    // Elements
    const themeBtn = document.getElementById('btn-theme');
    const soundBtn = document.getElementById('btn-sound');
    const textBtn = document.getElementById('btn-text');
    
    // Modal Elements
    const modal = document.getElementById('game-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalText = document.getElementById('modal-text');
    const modalClose = document.getElementById('modal-close');

    // State
    let isDarkMode = false;
    let isSoundOn = true;
    let textSizeIndex = 1; 
    const textSizes = ['12px', '16px', '22px'];
    const textSizeLabels = ['Small', 'Normal', 'Large'];

    // --- Modal Functions ---
    function openModal(title, message) {
        modalTitle.innerText = title;
        modalText.innerText = message;
        modal.classList.add('active');
    }

    function closeModal() {
        modal.classList.remove('active');
    }

    // --- Toggle Functions ---
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

    // --- Event Listeners ---
    
    // Settings Listeners
    if (themeBtn) themeBtn.addEventListener('click', toggleTheme);
    if (soundBtn) soundBtn.addEventListener('click', toggleSound);
    if (textBtn) textBtn.addEventListener('click', cycleTextSize);

    // Nav Button Listeners (Pop-ups)
    document.querySelectorAll('.nav-btn').forEach(button => {
        button.addEventListener('click', () => {
            const btnType = button.innerText;
            if (btnType === "Inventory") {
                openModal("Inventory", "Inevntory Loads");
            } else if (btnType === "Notes") {
                openModal("Notes", "NOtes work");
            } else if (btnType === "Skill Tree") {
                openModal("Skill Tree", "skill tree works");
            } else {
                openModal(btnType, "You clicked " + btnType);
            }
        });
    });

    // Modal Close Listeners
    if (modalClose) modalClose.addEventListener('click', closeModal);
    
    // Close modal if clicking outside the box
    window.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
});