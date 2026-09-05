import { loadScrollMenu } from '/assets/js/load/loadScrollNavMenu.js';
import { loadTippy } from '/assets/js/load/loadTippy.js';
import { loadAOS } from '/assets/js/load/loadAOS.js';
import { loadCarousel } from '/assets/js/load/loadCarousel.js';
import { loadSwitchMenu } from '/assets/js/load/loadSwitchMenu.js';
import { loadForm } from '/assets/js/load/loadForm.js';
import { attAge } from '/assets/js/functions/attAge.js';
import { loadCollapse } from '/assets/js/load/loadCollapse.js';

document.addEventListener('DOMContentLoaded', function() {
    const safeExec = (fn, name) => {
        try {
            fn();
        } catch (err) {
            console.warn(`Erro ao carregar ${name}:`, err);
        }
    };

    safeExec(loadAOS, 'AOS');
    safeExec(loadCarousel, 'Carousel');
    safeExec(loadForm, 'Form');
    safeExec(attAge, 'attAge');
    safeExec(loadCollapse, 'Collapse');
    safeExec(loadScrollMenu, 'ScrollMenu');
    safeExec(loadSwitchMenu, 'SwitchMenu');
    safeExec(loadTippy, 'Tippy');
});