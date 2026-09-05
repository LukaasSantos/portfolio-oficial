export function loadSwitchMenu() {
    const btnMenu = document.getElementById('btnMenu');
    const ulMenuMobile = document.querySelector('.ulMenuMobile');
    if (!btnMenu || !ulMenuMobile) return;

    btnMenu.addEventListener('click', () => {
        const isHidden = ulMenuMobile.classList.toggle('menuHidden');
        btnMenu.setAttribute('aria-expanded', !isHidden);
    });

    const menuLinks = ulMenuMobile.querySelectorAll('a');
    menuLinks.forEach((link) => {
        link.addEventListener('click', () => {
            ulMenuMobile.classList.add('menuHidden');
            btnMenu.setAttribute('aria-expanded', 'false');
        });
    });
}