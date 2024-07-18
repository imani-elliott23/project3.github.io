
// JavaScript for the number guessing game
const targetNumber = Math.floor(Math.random() * 100) + 1;
let score = 0;
let highScore = 0;

document.getElementById("checkButton").addEventListener("click", function() {
    const guess = parseInt(document.getElementById("guessInput").value);
  
    if (guess === targetNumber) {
        alert("Congratulations! You guessed the correct number!");
        score++;
        if (score > highScore) {
            highScore = score;
            document.getElementById("highScore").textContent = highScore;
        }
    } else {
        alert("Sorry, that's not the correct number. Try again!");
    }

    document.getElementById("score").textContent = score;
});

document.getElementById("resetButton").addEventListener("click", function() {
    score = 0;
    document.getElementById("score").textContent = score;
});
