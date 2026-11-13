
const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const idade = document.getElementById("idade").value;
    const peso = document.getElementById("peso").value;
    const categoria = document.getElementById("categoria").value;

    if (idade < 18) {
        alert("Você precisa ter pelo menos 18 anos para se tornar uma lenda da FFC-FLEXES FIGHT CHAMPIONSHIP!");
        return;
    }

    if (peso <= 0) {
        alert("Digite um peso válido!");
        return;
    }

    formulario.hidden = true;

    document.getElementById("mensagem-sucesso").hidden = false;

    console.log("Novo lutador inscrito:", nome, idade, peso, categoria);

});
