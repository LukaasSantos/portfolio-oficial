export function loadTippy() { 
    document.addEventListener('mouseover', function(event) {
        const btnNav = event.target.closest('.liMenu');
        if (btnNav) {
            tippy(btnNav, {
            content: btnNav.dataset.value,
            arrow: true,
            placement: 'right',
            animation: 'fade',
            });
        }
    });
}