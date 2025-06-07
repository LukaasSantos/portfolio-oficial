export function loadSwitchMenu() {
    const btnMenu = document.getElementById('btnMenu');
    const ulMenuMobile = document.querySelector('.ulMenuMobile');
    btnMenu.addEventListener('click', () => {
        ulMenuMobile.classList.toggle('menuHidden');

    })

    ulMenuMobile.childNodes.forEach((li) => {
        li.addEventListener('click', () => {
            if (ulMenuMobile.classList.contains('menuHidden')) {
                
            } else {
                ulMenuMobile.classList.toggle('menuHidden');

            }
        })
    })
}