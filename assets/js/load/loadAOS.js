export function loadAOS() {
    AOS.init();
    
    // Refresh AOS once all elements and assets are fully loaded in the window
    window.addEventListener('load', function() {
        AOS.refresh();
    });
}