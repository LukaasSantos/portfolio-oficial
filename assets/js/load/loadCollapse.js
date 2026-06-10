export function loadCollapse() {
    const headers = document.querySelectorAll('.collapse-header');
    headers.forEach(header => {
        header.addEventListener('click', () => {
            const targetId = header.getAttribute('data-target');
            const target = document.getElementById(targetId);
            if (target) {
                target.classList.toggle('collapsed');
                header.classList.toggle('collapsed');
            }
        });
    });
}
