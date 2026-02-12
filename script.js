const quizData = [
    { question: "1. Python file extension?", options: [".pt", ".py", ".pyt", ".python"], answer: ".py" },
    { question: "2. Keyword to define function?", options: ["func", "def", "function", "define"], answer: "def" },
    { question: "3. Comment symbol in Python?", options: ["//", "#", "/* */", "--"], answer: "#" },
    { question: "4. Output of 2 + 3?", options: ["23", "5", "6", "Error"], answer: "5" },
    { question: "5. Data type for text?", options: ["int", "str", "float", "bool"], answer: "str" },
    { question: "6. List brackets?", options: ["()", "{}", "[]", "<>"], answer: "[]" },
    { question: "7. Loop that runs while condition is true?", options: ["for", "while", "loop", "repeat"], answer: "while" },
    { question: "8. Function to print output?", options: ["echo()", "print()", "show()", "output()"], answer: "print()" },
    { question: "9. Boolean true value?", options: ["true", "TRUE", "True", "1"], answer: "True" },
    { question: "10. Multiplication operator?", options: ["x", "*", "%", "#"], answer: "*" }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const resultBox = document.getElementById("result");
const scoreText = document.getElementById("scoreText");

function loadQuestion() {
    const current = quizData[currentQuestion];
    questionEl.innerText = current.question;
    optionsEl.innerHTML = "";

    current.options.forEach(option => {
        const div = document.createElement("div");
        div.classList.add("option");
        div.innerHTML = `
            <input type="radio" name="answer" value="${option}">
            ${option}
        `;
        optionsEl.appendChild(div);
    });
}

nextBtn.addEventListener("click", () => {
    const selected = document.querySelector('input[name="answer"]:checked');

    if (!selected) {
        alert("Please select an answer!");
        return;
    }

    if (selected.value === quizData[currentQuestion].answer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        document.getElementById("quiz").classList.add("hide");
        resultBox.classList.remove("hide");
        scoreText.innerText = `Your Score: ${score} / ${quizData.length}`;
    }
});

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    resultBox.classList.add("hide");
    document.getElementById("quiz").classList.remove("hide");
    loadQuestion();
}

loadQuestion();
