// Perguntas e respostas sobre práticas sustentáveis
const perguntas = [
    "Qual a importância da compostagem?",
    "Cite uma prática sustentável no manejo de água.",
    "Como o controle biológico ajuda o meio ambiente?"
];

const respostas = [
    "A compostagem transforma resíduos em adubo natural, reduzindo lixo e fertilizantes químicos.",
    "Irrigação por gotejamento reduz desperdício e mantém a saúde do solo.",
    "Controla pragas sem pesticidas químicos, protegendo fauna e flora."
];

// Seleciona os elementos do DOM
const btn = document.getElementById('btnPergunta');
const resposta = document.getElementById('resposta');

// Evento de clique no botão
btn.addEventListener('click', () => {
    const index = Math.floor(Math.random() * perguntas.length);
    resposta.innerHTML = `<strong>Pergunta:</strong> ${perguntas[index]}<br><strong>Resposta:</strong> ${respostas[index]}`;
});
