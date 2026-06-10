
export function loadSwiper() {
    const wrapper = document.querySelector('.swiper-wrapper');
    if (!wrapper) return;

    // Guardar cópia original dos slides
    const originalSlides = Array.from(wrapper.querySelectorAll('.cardProjetos'));

    const swiper = new Swiper('.swiper', {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: ".swiper-pagination",
        },
    });

    const filterBtns = document.querySelectorAll('.filter-btn');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');

            // Limpar wrapper do DOM
            wrapper.innerHTML = '';

            // Filtrar e re-adicionar apenas os slides correspondentes
            originalSlides.forEach(slide => {
                if (filter === 'all' || slide.classList.contains(filter)) {
                    wrapper.appendChild(slide);
                }
            });

            // Atualizar e resetar posição do Swiper com os novos slides do DOM
            swiper.update();
            swiper.slideTo(0, 0);
        });
    });
}