
export function loadSwiper() {
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

    const swiperCategorias = new Swiper('.swiperCateg', {
        centeredSlides: true,
        slidesPerView: "auto",
    });
    swiperCategorias.on('slideChange', function (e) {
        const slideAtual = e.slides[e.activeIndex] || 0;
        trocaCategoria(slideAtual.id, e.activeIndex);
    });
    
    function trocaCategoria(id, index) {
        const projetos = document.querySelectorAll(".cardProjetos");
        console.log(index);
        
        if (index == 0) {
            projetos.forEach(projeto => {
                projeto.classList.remove("hidden")
            })
        } else {
            switch (id) {
                case "categWeb":
                    projetos.forEach(projeto => {
                        projeto.classList.contains("categWeb") ? projeto.classList.remove("hidden") : projeto.classList.add("hidden");
                    })
                    
                    break;
                case "categMobile":
                    projetos.forEach(projeto => {
                        projeto.classList.contains("categMobile") ? projeto.classList.remove("hidden") : projeto.classList.add("hidden");
                    })
                    break;
                case "categUI":
                    projetos.forEach(projeto => {
                        projeto.classList.contains("categUI") ? projeto.classList.remove("hidden") : projeto.classList.add("hidden");
                    })
                    break;
            }
        }
        swiper.update();
        requestAnimationFrame(() => {
        // Um segundo requestAnimationFrame pode ser necessário em alguns navegadores/condições
        // para garantir que o reflow completo ocorra
        requestAnimationFrame(() => {
            swiper.update(); // Recalcula o Swiper dos projetos
            swiper.slideTo(0); // Opcional: Voltar ao primeiro slide após a filtragem
        });
    });
    }
}