function inserirNome() {
    let nomeUsuario = prompt("Qual o seu nome?");
    let elemento = document.querySelector("#aluno");
    elemento.textContent = nomeUsuario;
    }

    inserirNome() {
    let nomeUsuario = prompt("Qual o seu nome?");
    let elemento = document.querySelector("#aluno");
    elemento.textContent = nomeUsuario;
    }
 inserirNome() 

 let aluno1 = {
  nome: "Gabriel",
  idade: 13,
  anoLetivo: "2ºsérie",
  materiasFavoritas: ["Geografia","Programação","Arte"]
}

console.log(aluno1.nome),
console.log(aluno1.idade),
console.log(aluno1.anoLetivo),
console.log(aluno1.materiasFavoritas[2]),
const objeto = document.querySelector("#aluno");
objeto.textContent = aluno1.nome;


let linguagens = ["Javascript", "Python", "C"];
const item1 = document.querySelector("#lista1");
item1.textContent = linguagens[0];
const item2 = document.querySelector("#lista2");
item2.textContent = linguagens[1];
const item3 = document.querySelector("#lista3");
item3.textContent = linguagens[2];

const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Quando uma página nova simplesmente com olá mundo, te diz olá, o que você pensa?",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: "No início ficou com medo do que essa tecnologia pode fazer. "
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: "Alguém preocupada em me cumprimentar aqui."
            }
        ]
    },
    {
        enunciado: "Com a descoberta desta tecGostaria de criar uma página igual, quer saber como?",
        alternativas: [
            {
                texto: "Utiliza uma ferramenta de busca na internet que utiliza IA para que ela ajude a encontrar informações relevantes para te ajudar nisso",
                afirmacao: "Conseguiu utilizar a IA para buscar informações úteis."
            },
            {
                texto: "Escreve o trabalho com base nas conversas que teve com colegas, algumas pesquisas na internet e conhecimentos próprios sobre o tema.",
                afirmacao: "Sentiu mais facilidade em utilizar seus próprios recursos para escrever seu trabalho."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();

function inserirNome() {
    let nomeUsuario = prompt("Qual o seu nome?");
    let elemento = document.querySelector("#nome-usuario");
    elemento.textContent = nomeUsuario;
}

inserirNome();

let linguagens = ["Javascript", "Python", "C"];
const item = document.querySelector("#lista");
item.textContent = linguagens[3];

let aluno1 = {
  nome: "Gabriel",
  idade: 13,
  anoLetivo: "2ºsérie",
  materiasFavoritas: ["Geografia","Programação","Arte"]
}

console.log(aluno1.nome);
