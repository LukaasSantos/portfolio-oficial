export function loadForm() {
    const formContato = document.getElementById('formContato'); 
    formContato.addEventListener('submit', async (event) => {
        event.preventDefault();
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const mensagem = document.getElementById('mensagem').value;

        try {
            // debugger

            const response = await fetch('/api/formContato.js', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ nome, email, mensagem })
            });

            console.log(response);
            const data = await response.json();
            console.log(data);

            if (data.success) {
                alert("Formulario enviado com sucesso!");
            } 
        } catch (error) {
            console.error('Erro ao enviar o e-mail:', error);
        }
    })
}