
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
        grabCursor: true,
        },

    });
    swiperCategorias.on('slideChange', function (e) {
        const slideAtual = e.slides[e.activeIndex] || 0;
        trocaCategoria(slideAtual.id, e.activeIndex);
        swiper.update();
        
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
                case "cardProjetos":
                    projetos.forEach(projeto => {
                        projeto.remove("hidden")
                    })
                    break;
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
    }
}