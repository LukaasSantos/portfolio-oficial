export function loadTippy() { 
    tippy('.liMenu', {
        content: (reference) => reference.dataset.value,
        arrow: true,
        placement: 'right',
        animation: 'fade',
    });
}