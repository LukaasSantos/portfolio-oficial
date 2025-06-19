import { loadScrollMenu } from '/assets/js/load/loadScrollNavMenu.js';
import { loadTippy } from '/assets/js/load/loadTippy.js';
import { loadAOS } from '/assets/js/load/loadAOS.js';
import { loadSwiper } from '/assets/js/load/loadSwiper.js';
import { loadSwitchMenu } from '/assets/js/load/loadSwitchMenu.js';
import { loadForm } from '/assets/js/load/loadForm.js';

document.addEventListener('DOMContentLoaded', function() {
    // loads
    loadScrollMenu();
    loadTippy();
    loadAOS();
    loadSwiper();
    loadSwitchMenu();
    loadForm();
});