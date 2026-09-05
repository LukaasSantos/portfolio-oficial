export function loadCarousel() {
    const track = document.getElementById('carouselTrack');
    const prevBtn = document.getElementById('carouselPrev');
    const nextBtn = document.getElementById('carouselNext');
    const filterBtns = document.querySelectorAll('.filter-btn');

    if (!track) return;

    const cards = Array.from(track.querySelectorAll('.cardProjetos'));

    function getScrollStep() {
        const visibleCard = track.querySelector('.cardProjetos:not(.hidden)');
        if (!visibleCard) return track.clientWidth;
        const style = window.getComputedStyle(track);
        const gap = parseFloat(style.gap) || 24;
        return visibleCard.offsetWidth + gap;
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            track.scrollBy({ left: -getScrollStep(), behavior: 'smooth' });
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            track.scrollBy({ left: getScrollStep(), behavior: 'smooth' });
        });
    }

    // Filtros de Categoria
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');

            cards.forEach(card => {
                if (filter === 'all' || card.classList.contains(filter)) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            });

            track.scrollTo({ left: 0, behavior: 'smooth' });
        });
    });

    // Suporte a arrastar com o mouse (Desktop drag)
    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;
    let hasMoved = false;

    track.addEventListener('mousedown', (e) => {
        isDown = true;
        hasMoved = false;
        track.classList.add('dragging');
        startX = e.pageX - track.offsetLeft;
        scrollLeft = track.scrollLeft;
    });

    window.addEventListener('mouseup', () => {
        if (!isDown) return;
        isDown = false;
        track.classList.remove('dragging');
    });

    track.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - track.offsetLeft;
        const walk = (x - startX) * 1.5;
        if (Math.abs(walk) > 5) {
            hasMoved = true;
        }
        track.scrollLeft = scrollLeft - walk;
    });

    // Evita abrir o link se o usuário estiver apenas arrastando o carrossel
    track.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', (e) => {
            if (hasMoved) {
                e.preventDefault();
                hasMoved = false;
            }
        });
    });
}
