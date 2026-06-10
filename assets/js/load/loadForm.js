export function loadForm() {
    const formContato = document.getElementById('formContato'); 
    formContato.addEventListener('submit', async (event) => {
        event.preventDefault();
        
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
                alert("Formulário enviado com sucesso!");
                formContato.reset();
            } else {
                alert("Erro ao enviar: " + data.message);
            }
        } catch (error) {
            console.error('Erro ao enviar o formulário:', error);
            alert("Erro de conexão. Tente novamente mais tarde.");
        }
    })
}