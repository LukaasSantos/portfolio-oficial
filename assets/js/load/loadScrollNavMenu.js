export function loadScrollMenu() {
    const header = document.querySelector('.headerMobile');
    let lastScrollY = window.scrollY; // Armazena a última posição de rolagem
    const scrollThreshold = 50; // Quantos pixels de rolagem são necessários para o menu aparecer/desaparecer
    window.addEventListener('scroll', () => {
        // Obter a posição de rolagem atual
        const currentScrollY = window.scrollY;

        // Se a página estiver no topo, sempre mostrar o menu
        if (currentScrollY <= 0) {
            header.classList.remove('hidden');
            lastScrollY = currentScrollY; // Atualiza a última posição de rolagem
            return;
        }

        // Detectar a direção da rolagem
        if (currentScrollY > lastScrollY && currentScrollY > scrollThreshold) {
            // Rolando para baixo e já passou do limite inicial
            header.classList.add('hidden');
        } else if (currentScrollY < lastScrollY) {
            // Rolando para cima
            header.classList.remove('hidden');
        }

        // Atualizar a última posição de rolagem
        lastScrollY = currentScrollY;
    });
}