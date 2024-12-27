// Number Guessing Game

// Generate a random number between 1 and 100
let randomNumber = Math.floor(Math.random() * 100) + 1;

// Initialize attempts
let attempts = 0;

// Function to check the user's guess
function checkGuess() {
    const userGuess = parseInt(document.getElementById('guessInput').value);
    const feedback = document.getElementById('feedback');
    attempts++;

    if (userGuess === randomNumber) {
        feedback.textContent = `Congratulations! You guessed the correct number in ${attempts} attempts.`;
        feedback.style.color = 'green';
        disableInput();
    } else if (userGuess > randomNumber) {
        feedback.textContent = 'Too high! Try again.';
        feedback.style.color = 'orange';
    } else if (userGuess < randomNumber) {
        feedback.textContent = 'Too low! Try again.';
        feedback.style.color = 'orange';
    } else {
        feedback.textContent = 'Please enter a valid number.';
        feedback.style.color = 'red';
    }
}

// Function to reset the game
function resetGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById('guessInput').value = '';
    document.getElementById('feedback').textContent = '';
    document.getElementById('guessInput').disabled = false;
    document.getElementById('checkButton').disabled = false;
}

// Disable input after the correct guess
function disableInput() {
    document.getElementById('guessInput').disabled = true;
    document.getElementById('checkButton').disabled = true;
}
