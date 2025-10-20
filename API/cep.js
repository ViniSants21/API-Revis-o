// Quando o botão buscar for clicado, faz a pesquisa do CEP
document.getElementById("buscar").addEventListener("click", function() {
    // Pega o valor que o usuário digitou
    const cep = document.getElementById("cep").value.trim();
    if (cep === "") {
        alert("Por favor, digite um CEP!");
        return;
    }
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            // Se o CEP não existir, mostra alerta
            if (data.erro) {
                alert("CEP não encontrado!");
                return;
            }
            // Mostra os dados na tela
            document.getElementById('resultado').innerText = data.bairro || "Não informado";
            document.getElementById('resultado2').innerText = data.logradouro || "Não informado";
            document.getElementById('resultado3').innerText = data.localidade || "Não informado";
            document.getElementById('resultado4').innerText = data.uf || "Não informado";
        })
});
