
// JavaScript for the number guessing game
let targetNumber = Math.floor(Math.random() * 100) + 1;
let score = 0;
let highScore = 0;
let trials = 10;

document.getElementById("checkButton").addEventListener("click", function() {
    const guess = parseInt(document.getElementById("guessInput").value);
  
    if (trials > 0) {
        if (guess === 5) {
            alert("Correct! Congratulations!");
            score++;
            if (score > highScore) {
                highScore = score;
                document.getElementById("highScore").textContent = highScore;
            }
        } else {
            alert("Incorrect! Please try again.");
        }

        document.getElementById("score").textContent = score;
        trials--;
        document.getElementById("trialsLeft").textContent = trials;
    } else {
        alert("You have used all your trials. Game Over!");
        document.getElementById("checkButton").disabled = true;
        document.getElementById("guessInput").disabled = true;
    }
});

document.getElementById("resetButton").addEventListener("click", function() {
    score = 0;
    trials = 10;
    targetNumber = Math.floor(Math.random() * 100) + 1;
    document.getElementById("score").textContent = score;
    document.getElementById("trialsLeft").textContent = trials;
    document.getElementById("checkButton").disabled = false;
    document.getElementById("guessInput").disabled = false;
    document.getElementById("guessInput").value = "";
});

document.getElementById("continueButton").addEventListener("click", function() {
    targetNumber = Math.floor(Math.random() * 100) + 1;
    alert("A new number has been picked. Keep playing!");
});
