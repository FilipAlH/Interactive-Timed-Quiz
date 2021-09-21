//timer function with start button event listener

let startQuizButton = document.querySelector("#start-quiz")

startQuizButton.addEventListener("click", function(event) {
    event.stopPropagation()
    runGame()
});

function runGame() {
    count = 75
    let timeLeft = document.querySelector(".Timer")
    
    let timeInterval = setInterval(function() {
        count--;
        timeLeft.textContent = count

        if (count === 0) {
            clearInterval(timeInterval)
        }
    })
}

