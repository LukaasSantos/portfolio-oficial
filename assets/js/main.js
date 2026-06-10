import { loadScrollMenu } from '/assets/js/load/loadScrollNavMenu.js';
import { loadTippy } from '/assets/js/load/loadTippy.js';
import { loadAOS } from '/assets/js/load/loadAOS.js';
import { loadSwiper } from '/assets/js/load/loadSwiper.js';
import { loadSwitchMenu } from '/assets/js/load/loadSwitchMenu.js';
import { loadForm } from '/assets/js/load/loadForm.js';
import { attAge } from '/assets/js/functions/attAge.js';
import { loadCollapse } from '/assets/js/load/loadCollapse.js';

document.addEventListener('DOMContentLoaded', function() {
    const isMobile = document.documentElement.classList.contains('is-mobile');

    // Comum
    loadAOS();
    loadSwiper();
    loadForm();
    attAge();
    loadCollapse();

    // Condicional por dispositivo
    if (isMobile) {
        loadScrollMenu();
        loadSwitchMenu();
    } else {
        loadTippy();
    }
});