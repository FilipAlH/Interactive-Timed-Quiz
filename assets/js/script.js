//these are the primary variables associated with the main game, main menu, and timer

let startQuizButton = document.querySelector('.start-quiz')
let timeLeft = document.querySelector('.Timer');
let quiz = document.querySelector('.Quiz')
let highScore = document.querySelector('.HighScorePage')
let donePage = document.querySelector('.DonePage')
let main = document.querySelector('.main-page')
let question1 = document.querySelector('.question1')
let question2 = document.querySelector('.question2')
let question3 = document.querySelector('.question3')
let question4 = document.querySelector('.question4')
let score = document.querySelector('.FinalScore')

let hsRedirect = document.querySelector("a")
let mainRedirect = document.querySelector(".ReturnToMenu")
//these are the functions responsible for hiding the elements and showing them when they are needed
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

function hideQ1() {
    question1.style.display = "none"
}

function showQ1() {
    question1.style.display = "flex"
}

function hideQ2() {
    question2.style.display = "none"
}

function showQ2() {
    question2.style.display = "flex"
}

function hideQ3() {
    question3.style.display = "none"
}

function showQ3() {
    question3.style.display = "flex"
}

function hideQ4() {
    question4.style.display = "none"
}

function showQ4() {
    question4.style.display = "flex"
}
//this is to hide the elements until they are needed
hideQuiz()
hideHighScore()
hideDone()
hideQ1()
hideQ2()
hideQ3()
hideQ4()
//this will take you to the leaderboards
function redirectHs(event) {
    event.preventDefault()
    hideMain()
    hideDone()
    hideQ1()
    hideQ2()
    hideQ3()
    hideQ4()
    showHighScore()
}
//this refreshes the game page after you have cleared it to reset all of the elements 
function redirectMain(event) {
    location.reload();
    event.preventDefault()
}

//this is the timer that begins when the game is run and ends when all the questions are cleared or the timer runs out
//the score is based off the time remaining in the end
startQuizButton.addEventListener("click", runTimer)
hsRedirect.addEventListener("click", redirectHs)
mainRedirect.addEventListener("click", redirectMain)

let count = 75
let finalScore = "" 

function runTimer(event) {
    event.preventDefault()
    runGame()

    let timeInterval = setInterval(function () {
        count--;
        timeLeft.textContent = count

        if ((count <= 0) || (finalScore != "")) {
            clearInterval(timeInterval)
            hideQuiz()
            showDone()

        } 
    }, 1000);
}
//this is the main game function where the questions are put into their section
//the answers are generated into buttons and on pressing the any button you move on to the next question 
//with or without time pentaly
function runGame() {
    hideMain()
    showQuiz()
    let questions = {
        1: ["HTML", "CSS", "JavaScript", "kotlin"],
        2: ['flex', 'True', 'inline-flex', 'hidden'],
        3: ["styling", "markup", "scripting", "Database"],
        4: [".length()", ".push()", ".querySelector()", ".addEventListener()"],
    }

    function Question1() {
        hideMain()
        showQ1()
        question1.textContent = "Which tool is NOT one of the primary three web developers learn?"

        let questionsList1 = questions[1]

        let answer1 = "kotlin"

        for (j = 0; j < 4; j++) {
            let button1 = document.createElement("BUTTON");
            let text1 = document.createTextNode(questionsList1[j]);
            button1.appendChild(text1)
            question1.appendChild(button1)
        }

        question1.addEventListener("click", function(event){
            let buttonClicked1 = event.target.textContent
            if (buttonClicked1 == answer1) {
                return Question2()
            } else {
                count = count - 10
                return Question2()
            }
        })
        
    }
    Question1()

    function Question2() {
        hideQ1()
        showQ2()
        question2.textContent = "Which of these are NOT a CSS display type?"

        let questionsList2 = questions[2]

        let answer2 = "True"

        for (j = 0; j < 4; j++) {
            let button2 = document.createElement("BUTTON");
            let text2 = document.createTextNode(questionsList2[j]);
            button2.appendChild(text2)
            question2.appendChild(button2)
        }

        question2.addEventListener("click", function(event){
            let buttonClicked2 = event.target.textContent
            if (buttonClicked2 == answer2) {
                Question3()
            } else {
                count = count - 10
                Question3()
            }
        })
        
    }

    function Question3() {
        hideQ2()
        showQ3()
        question3.textContent = "JavaScript is defined as what kind of a language?"

        let questionsList3 = questions[3]

        let answer3 = "scripting"

        for (j = 0; j < 4; j++) {
            let button3 = document.createElement("BUTTON");
            let text3 = document.createTextNode(questionsList3[j]);
            button3.appendChild(text3)
            question3.appendChild(button3)
        }

        question3.addEventListener("click", function(event){
            let buttonClicked3 = event.target.textContent
            if (buttonClicked3 == answer3) {
                Question4()
            } else {
                count = count - 10
                Question4()
            }
        })
        
    }

    function Question4() {
        hideQ3()
        showQ4()
        question4.textContent = "which of these is NOT a method in JavaScript?"

        let questionsList4 = questions[4]

        let answer4 = ".length()"

        for (j = 0; j < 4; j++) {
            let button4 = document.createElement("BUTTON");
            let text4 = document.createTextNode(questionsList4[j]);
            button4.appendChild(text4)
            question4.appendChild(button4)
        }

        question4.addEventListener("click", function(event){
            let buttonClicked4 = event.target.textContent
            if (buttonClicked4 == answer4) {
                finalScore = count - 1 
                score.textContent = "Your final score was: " + String(finalScore) + "."
            } else {
                count = count - 10
                finalScore = count - 1 
                score.textContent = "Your final score was: " + String(finalScore) + "."
            } return finalScore
        })
    }
}

//this handles the submission and storage of the leaderboards
//the function retrieves from local storage and then saves the previous list along with the new addition
//the event listener is triggered from the submission of a name 
let highScores = document.querySelector('.HighScores');
let toHighScores = document.querySelector(".send")
let removal = document.querySelector(".delete-item-btn")


function handleFormSubmit(event) {
    event.preventDefault();
    let storedLeaderboards = JSON.parse(localStorage.getItem("leaderboards"));

    let leaderboards = {
        ...storedLeaderboards,
    };

    let playerName = document.querySelector(".Name").value
    let highScoreItem = document.createElement("li")

    leaderboards[playerName] = finalScore
  
    highScores.append(highScoreItem);
    score.append(" Your score has been saved!")
    
    localStorage.setItem("leaderboards", JSON.stringify(leaderboards))

    highScoreItem.innerHTML = JSON.stringify(leaderboards);

    $('input[name="Name"]').val('');
  }

toHighScores.addEventListener('click', handleFormSubmit);
