const perguntas = [
    {
        pergunta: "Qual é o nome verdadeiro do Homem de Ferro?",
        opcoes: [
            "Peter Parker",
            "Steve Rogers",
            "Tony Stark",
            "Bruce Banner"
        ],
        resposta: 1 // índice da resposta correta
    },
    {
        pergunta: "Qual vilão da DC é conhecido por ser o arqui-inimigo do Batman?",
        opcoes: [
            "Lex Luthor",
            "Duas-Caras",
            "Coringa",
            "Exterminador"
        ],
        resposta: 2
    },
    {
        pergunta: "Qual é o martelo mágico usado por Thor, na Marvel?",
        opcoes: [
            "Stormbreaker",
            "Gungnir",
            "Mjolnir",
            "Jarnbjorn"
        ],
        resposta: 2
    },
    {
        pergunta: "Qual personagem da DC é conhecido como a 'Mulher-Maravilha'?",
        opcoes: [
            "Kara Zor-El",
            "Diana Prince",
            "Barbara Gordon",
            "Zatanna Zatara"
        ],
        resposta: 1
    },
    {
        pergunta: "Qual equipe de super-heróis pertence ao universo Marvel?",
        opcoes: [
            "Liga da Justiça",
            "Jovens Titãs",
            "Vingadores",
            "Patrulha do Destino"
        ],
        resposta: 2
    },
    {
        pergunta: "Quem criou o traje simbionte que se torna o Venom no universo Marvel?",
        opcoes: [
            "Peter Parker",
            "Eddie Brock",
            "Flash Thompson",
            "Reed Richards"
        ],
        resposta: 0
    },
    {
        pergunta: "Quem foi o primeiro Vingador recrutado pela S.H.I.E.L.D.?",
        opcoes: [
            "Homem de Ferro",
            "Capitão América",
            "Thor",
            "Viúva Negra"
        ],
        resposta: 0
    }
];

// Função para gerar os flashcards
function criarFlashcards() {
    const container = document.getElementById("container");

    perguntas.forEach((pergunta, index) => {
        const cartao = document.createElement("article");
        cartao.classList.add("cartao");

        cartao.innerHTML = `
            <div class="cartao__conteudo">
                <h3>Questão ${index + 1}</h3>
                <div class="cartao__conteudo__pergunta">
                    <p>${pergunta.pergunta}</p>
                </div>
                <div class="cartao__conteudo__opcoes">
                    ${pergunta.opcoes.map((opcao, i) => `
                        <label>
                            <input type="radio" name="pergunta${index}" value="${i}">
                            ${opcao}
                        </label>
                    `).join('')}
                </div>
                <button onclick="verificarResposta(${index})">Responder</button>
                <div class="resultado" id="resultado${index}" style="display:none;"></div>
            </div>
        `;
        
        container.appendChild(cartao);
    });
}

// Função para verificar a resposta
function verificarResposta(index) {
    const opcoes = document.getElementsByName(`pergunta${index}`);
    const resultadoDiv = document.getElementById(`resultado${index}`);
    let respostaSelecionada;

    opcoes.forEach((opcao, i) => {
        if (opcao.checked) {
            respostaSelecionada = i;
        }
    });

    if (respostaSelecionada === undefined) {
        resultadoDiv.innerHTML = "Por favor, selecione uma opção.";
    } else if (respostaSelecionada === perguntas[index].resposta) {
        resultadoDiv.innerHTML = "Resposta correta!";
    } else {
        resultadoDiv.innerHTML = "Resposta errada! A resposta correta é: " + perguntas[index].opcoes[perguntas[index].resposta];
    }

    resultadoDiv.style.display = "block";
}

// Chama a função para criar os flashcards ao carregar a página
window.onload = criarFlashcards;

