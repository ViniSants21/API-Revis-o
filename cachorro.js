document.getElementById("gerar").addEventListener("click", () => {
    fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then(data => {
            document.getElementById("imagemCachorro").src = data.message;
        })
        .catch(error => {
            console.error("Erro ao buscar a imagem:", error);
            alert("Ocorreu um erro ao gerar o cachorro. Tente novamente.");
        });
});
