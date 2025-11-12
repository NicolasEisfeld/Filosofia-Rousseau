const questions = [
    {
        question: "1. Para Rousseau, qual é o papel principal do educador?",
        options: [
            "A) Ensinar conteúdos de forma rígida e controlada.",
            "B) Moldar o aluno segundo os valores sociais.",
            "C) Guiar o aluno no desenvolvimento natural de suas capacidades.",
            "D) Avaliar o aluno por meio de provas padronizadas."
        ],
        correct: 2,
        feedback: "Correto! Rousseau acreditava que o educador deveria guiar o aluno, e não moldá-lo."
    },
    {
        question: "2. O que o MEG e Rousseau têm em comum quanto ao processo de aprendizagem?",
        options: [
            "A) Ambos valorizam a autonomia e o aprendizado ativo.",
            "B) Ambos priorizam a memorização mecânica.",
            "C) Ambos rejeitam o uso da experiência como forma de ensino.",
            "D) Ambos defendem o controle total do professor."
        ],
        correct: 0,
        feedback: "Perfeito! Tanto o MEG quanto Rousseau valorizam a autonomia e o aprendizado pela experiência."
    },
    {
        question: "3. Qual é a principal crítica de Rousseau à educação tradicional?",
        options: [
            "A) O excesso de liberdade dos alunos.",
            "B) A imposição rígida de conteúdos e valores.",
            "C) O uso de tecnologias no ensino.",
            "D) A falta de punição para erros."
        ],
        correct: 1,
        feedback: "Exatamente. Rousseau criticava o ensino autoritário e mecânico de sua época."
    },
    {
        question: "4. No MEG, o aluno pode escolher o que estudar e quando. Isso representa:",
        options: [
            "A) A liberdade e o respeito ao ritmo individual, como defendia Rousseau.",
            "B) Um afastamento total da educação natural.",
            "C) Um método tradicional.",
            "D) A rejeição da autonomia."
        ],
        correct: 0,
        feedback: "Correto! O MEG traduz a ideia rousseauniana de respeitar o tempo e as escolhas do aluno."
    },
    {
        question: "5. Rousseau via o aprendizado como resultado de:",
        options: [
            "A) Repetição e obediência.",
            "B) Experiência e curiosidade.",
            "C) Pressão e punição.",
            "D) Competição entre alunos."
        ],
        correct: 1,
        feedback: "Muito bem! Rousseau acreditava que a curiosidade e a experiência movem o verdadeiro aprendizado."
    },
    {
        question: "6. Qual é a relação entre o MEG e a ideia de 'educação natural' de Rousseau?",
        options: [
            "A) Ambos impõem um modelo fixo de ensino.",
            "B) Ambos respeitam o desenvolvimento espontâneo do aluno.",
            "C) O MEG rejeita a autonomia do estudante.",
            "D) Rousseau defendia a mecanização do aprendizado."
        ],
        correct: 1,
        feedback: "Certo! O MEG, assim como Rousseau, valoriza o crescimento natural e o ritmo de cada estudante."
    },
    {
        question: "7. Para Rousseau, a infância deve ser:",
        options: [
            "A) Um treino para a vida adulta, sem valor próprio.",
            "B) Ignorada em suas particularidades.",
            "C) Uma fase única, respeitada em suas formas de aprender.",
            "D) Submetida a regras rígidas de ensino."
        ],
        correct: 2,
        feedback: "Perfeito! Ele foi um dos primeiros a reconhecer a infância como uma etapa especial do desenvolvimento."
    },
    {
        question: "8. O MEG busca tornar o aprendizado:",
        options: [
            "A) Autônomo e significativo.",
            "B) Rígido e padronizado.",
            "C) Baseado apenas em memorização.",
            "D) Limitado à teoria."
        ],
        correct: 0,
        feedback: "Correto! O MEG incentiva a autonomia e o aprendizado com sentido, como propunha Rousseau."
    },
    {
        question: "9. Quando Rousseau diz que 'o homem nasce bom', isso significa que:",
        options: [
            "A) A sociedade e a educação o tornam corrupto.",
            "B) Ele precisa ser moldado pela religião.",
            "C) Deve ser punido para aprender.",
            "D) Não precisa de educação."
        ],
        correct: 0,
        feedback: "Exato! Rousseau acreditava que a sociedade é quem corrompe a bondade natural do ser humano."
    },
    {
        question: "10. O MEG pode ser visto como uma concretização moderna das ideias de Rousseau porque:",
        options: [
            "A) Une liberdade, tecnologia e aprendizado autônomo.",
            "B) Retorna ao ensino medieval.",
            "C) Rejeita o uso da experiência prática.",
            "D) Valoriza apenas notas e provas."
        ],
        correct: 0,
        feedback: "Muito bem! O MEG aplica os princípios rousseaunianos à educação do século XXI."
    }
];

let currentQuestion = 0;
let score = 0;
const quizEl = document.getElementById("quiz");
const nextBtn = document.getElementById("next-btn");

function loadQuestion() {
    const q = questions[currentQuestion];
    quizEl.innerHTML = `
        <div class="question">${q.question}</div>
        <div class="options">
          ${q.options.map((opt, i) => `<div class="option" data-index="${i}">${opt}</div>`).join('')}
        </div>
        <div class="feedback" id="feedback"></div>
      `;
    nextBtn.style.display = "none";
    document.querySelectorAll(".option").forEach(opt => {
        opt.addEventListener("click", selectOption);
    });
}

function selectOption(e) {
    const selected = e.target;
    const index = parseInt(selected.getAttribute("data-index"));
    const q = questions[currentQuestion];
    const feedback = document.getElementById("feedback");

    document.querySelectorAll(".option").forEach(opt => opt.style.pointerEvents = "none");

    if (index === q.correct) {
        selected.classList.add("correct");
        feedback.textContent = q.feedback;
        score++;
    } else {
        selected.classList.add("wrong");
        feedback.textContent = "Resposta incorreta. " + q.feedback;
    }

    nextBtn.style.display = "inline-block";
}

nextBtn.addEventListener("click", () => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        quizEl.innerHTML = `<h2>Você completou o quiz!</h2><p>Pontuação final: ${score}/${questions.length}</p>`;
        nextBtn.style.display = "none";
    }
});

loadQuestion();