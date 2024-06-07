document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('password').value;
    const mensagem = document.getElementById('mensagem').value;

    if (nome === "") {
        alert('Preencha seu nome!');
        return;
    }

    if (email === "") {
        alert('Preencha seu email!');
        return;
    }

    if (senha === "") {
        alert('Preencha com a senha');
        return;
    }

    if (mensagem === "") {
        alert('Preencha a mensagem!');
        return;
    }

    alert("Seu formulário foi enviado!");
});
