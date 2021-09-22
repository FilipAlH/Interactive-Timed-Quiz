//timer function with start button event listener

let startQuizButton = document.querySelector('.start-quiz')
let timeLeft = document.querySelector('.Timer');
let quiz = document.querySelector('.Quiz')
let highScore = document.querySelector('.HighScorePage')
let donePage = document.querySelector('.DonePage')
let main = document.querySelector('.main-page')

startQuizButton.addEventListener("click", runTimer)
let count = 3

function hideMain() {
    main.style.display = "none"
}

function showMain() {
    main.style.display = "flex"
}

function hideQuiz() {
    quiz.style.display = "none"
}

function showQuiz() {
    quiz.style.display = "flex"
}

function hideHighScore() {
    highScore.style.display = "none"
}

function showHighScore() {
    highScore.style.display = "flex"
}

function hideDone() {
    donePage.style.display = "none"
}

function showDone() {
    donePage.style.display = "flex"
}

hideQuiz()
hideHighScore()
hideDone()

function runTimer() {
    timeLeft.textContent = 3
    runGame()

    let timeInterval = setInterval(function () {
        count--;
        timeLeft.textContent = count

        if (count == 0) {
            clearInterval(timeInterval)
            hideQuiz()
            showDone()

        } 
    }, 1000);
}

function runGame() {
    hideMain()
    showQuiz()
    let questions = {
        "how old are you?": [23, 24, 25, 26],
        "where were you born?": ['serbia', 'canada', 'america', 'china']
    }
    console.log(questions)
}