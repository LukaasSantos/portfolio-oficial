export function loadAOS() {
    function init() {
        if (typeof AOS !== 'undefined') {
            try {
                AOS.init({
                    duration: 600,
                    easing: 'ease-out-cubic',
                    once: true,
                    offset: 40,
                    disableMutationObserver: false
                });
                document.documentElement.classList.add('aos-initialized');
                document.documentElement.classList.remove('aos-fallback');

                window.addEventListener('load', function() {
                    try {
                        AOS.refresh();
                    } catch (e) {
                        // ignore
                    }
                });
                return true;
            } catch (err) {
                console.warn('AOS init error:', err);
            }
        }
        return false;
    }

    // Tenta inicializar imediatamente
    if (!init()) {
        let attempts = 0;
        const interval = setInterval(() => {
            attempts++;
            if (init() || attempts >= 10) {
                clearInterval(interval);
                if (attempts >= 10 && typeof AOS === 'undefined') {
                    // Se o CDN do AOS falhar ou for bloqueado, ativa fallback para exibir todo o conteúdo
                    document.documentElement.classList.add('aos-fallback');
                }
            }
        }, 100);

        // Garantia de segurança: após 1.2s força exibição caso o script não responda
        setTimeout(() => {
            if (!document.documentElement.classList.contains('aos-initialized')) {
                document.documentElement.classList.add('aos-fallback');
            }
        }, 1200);
    }
}