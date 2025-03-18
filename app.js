//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

function adicionarAmigo() {
    let input = document.getElementById("amigo"); // Insere a entrada do nome do amigo
    let nome = input.value;

    if (nome === "") {
        alert("Por favor, insira um nome.");
    } else {
        amigos.push(nome); // Adiciona o nome ao array
        input.value = ""; // Limpa o campo de entrada
        mostrarAmigos(); // Atualiza a lista de amigos
    }
}

function mostrarAmigos() {
    let lista = document.getElementById("listaAmigos"); // Seleciona a lista
    lista.innerHTML = ""; // Limpa a lista antes de adicionar novos elementos

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li"); // Cria um novo item de lista
        li.textContent = amigos[i]; // Define o nome do amigo no item
        lista.appendChild(li); // Adiciona o item à lista
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione amigos antes de sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length); // Gera um índice aleatório
    let amigoSorteado = amigos[indiceAleatorio]; // Obtém o nome sorteado

    let resultado = document.getElementById("resultado"); // Seleciona o elemento para exibir o resultado
    resultado.innerHTML = "Amigo secreto sorteado: " + amigoSorteado; // Exibe o resultado
}