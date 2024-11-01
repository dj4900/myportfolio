(() => {
    const questions = [
        {
            question: "Was ist mein Lieblingshobby?",
            answers: [
                { text: "Lesen", correct: false },
                { text: "Reisen", correct: true },
                { text: "Kochen", correct: false }
            ]
        },
        {
            question: "Wo wohne ich?",
            answers: [
                { text: "Berlin", correct: true },
                { text: "Hamburg", correct: false },
                { text: "München", correct: false }
            ]
        },
        {
            question: "Welches Fach mag ich am meisten?",
            answers: [
                { text: "Mathematik", correct: false },
                { text: "Informatik", correct: true },
                { text: "Kunst", correct: false }
            ]
        }
    ];

    let currentQuestionIndex = 0;
    let correctAnswersCount = 0;
    let correctAnswersList = [];

    function loadQuestion() {
        const questionContainer = document.getElementById("question");
        const answersContainer = document.getElementById("answers");
        const currentQuestion = questions[currentQuestionIndex];

        questionContainer.innerText = currentQuestion.question;
        answersContainer.innerHTML = ""; 
        
        currentQuestion.answers.forEach(answer => {
            const button = document.createElement("div");
            button.innerText = answer.text;
            button.classList.add("answer");
            button.addEventListener("click", () => selectAnswer(answer, button));
            answersContainer.appendChild(button);
        });
    }

    function selectAnswer(answer, button) {
        if (answer.correct) {
            button.classList.add("correct");
            correctAnswersCount++;
        } else {
            button.classList.add("incorrect");
        }

        const correctAnswer = questions[currentQuestionIndex].answers.find(a => a.correct).text;
        correctAnswersList.push({
            question: questions[currentQuestionIndex].question,
            correctAnswer: correctAnswer
        });

        setTimeout(() => {
            currentQuestionIndex++;
            
            if (currentQuestionIndex < questions.length) {
                loadQuestion();
            } else {
                showOverlay();
            }
        }, 1000);
    }

    // Funktion, um das Overlay anzuzeigen und die Ergebnisse zu füllen
    function showOverlay() {
        const overlay = document.getElementById("overlay");
        const resultMessage = document.getElementById("result-message");
        const percentage = (correctAnswersCount / questions.length) * 100;

        let resultText = `Du hast ${percentage}% der Fragen richtig beantwortet.\n\nRichtige Antworten:\n`;
        correctAnswersList.forEach(item => {
            resultText += `${item.question}: ${item.correctAnswer}\n`;
        });

        resultMessage.innerText = resultText;
        overlay.classList.remove("hidden");

        if (percentage >= 70) {
            showFireworks();
        }
    }

    // Funktion zum Schließen des Overlays
    document.getElementById("close-overlay").addEventListener("click", () => {
        document.getElementById("overlay").classList.add("hidden");
        resetQuiz();
    });

    // Quiz zurücksetzen
    function resetQuiz() {
        currentQuestionIndex = 0;
        correctAnswersCount = 0;
        correctAnswersList = [];
        loadQuestion();
    }

    // Funktion, um ein Feuerwerk anzuzeigen
    function showFireworks() {
        const fireworksContainer = document.createElement("div");
        fireworksContainer.id = "fireworks";
        document.body.appendChild(fireworksContainer);

        // Feuerwerk starten mit fireworks.js
        const fireworks = new Fireworks(fireworksContainer, {
            speed: 2,
            particles: 150,
            explosion: 4
        });
        fireworks.start();

        // Feuerwerk nach 5 Sekunden beenden und das Element entfernen
        setTimeout(() => {
            fireworks.stop();
            document.body.removeChild(fireworksContainer);
        }, 5000);
    }

    loadQuestion();
})();
