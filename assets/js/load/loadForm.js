export function loadForm() {
    const formContato = document.getElementById('formContato');
    if (!formContato) return;

    const btnSubmit = document.getElementById('btnEnviarForm');

    function showToast(message, type = 'success') {
        let toast = document.getElementById('formToast');
        if (!toast) {
            toast = document.createElement('div');
            toast.id = 'formToast';
            toast.setAttribute('role', 'status');
            toast.setAttribute('aria-live', 'polite');
            document.body.appendChild(toast);
        }

        toast.className = `form-toast form-toast-${type} show`;
        toast.textContent = message;

        clearTimeout(toast.timeoutId);
        toast.timeoutId = setTimeout(() => {
            toast.classList.remove('show');
        }, 4000);
    }

    formContato.addEventListener('submit', async (event) => {
        event.preventDefault();

        const nome = formContato.querySelector('#nome')?.value?.trim();
        const email = formContato.querySelector('#email')?.value?.trim();

        if (!nome || !email) {
            showToast('Por favor, preencha os campos obrigatórios (nome e email).', 'error');
            return;
        }

        const originalBtnText = btnSubmit ? btnSubmit.innerHTML : 'Enviar';
        if (btnSubmit) {
            btnSubmit.disabled = true;
            btnSubmit.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>Enviando...';
        }

        const formData = new FormData(formContato);
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: json
            });

            const data = await response.json();

            if (data.success) {
                showToast('Mensagem enviada com sucesso! Em breve entrarei em contato.', 'success');
                formContato.reset();
            } else {
                showToast('Erro ao enviar: ' + (data.message || 'Tente novamente.'), 'error');
            }
        } catch (error) {
            console.error('Erro ao enviar o formulário:', error);
            showToast('Erro de conexão. Verifique sua internet ou tente mais tarde.', 'error');
        } finally {
            if (btnSubmit) {
                btnSubmit.disabled = false;
                btnSubmit.innerHTML = originalBtnText;
            }
        }
    });
}