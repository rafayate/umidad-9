
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {

    const options = ["Piedra", "Papel", "Tijera"];

    // La máquina elige al azar
    const randomNumber = Math.floor(Math.random() * 3);
    const computerChoice = options[randomNumber];

    // Mostrar las elecciones
    document.getElementById("playerChoice").textContent =
        "Tu elección: " + playerChoice;

    document.getElementById("computerChoice").textContent =
        "Elección de la máquina: " + computerChoice;

    let result = "";

    // Determinar quién ganó
    if (playerChoice === computerChoice) {
        result = "¡Empate! 🤝";
    }
    else if (
        (playerChoice === "Piedra" && computerChoice === "Tijera") ||
        (playerChoice === "Papel" && computerChoice === "Piedra") ||
        (playerChoice === "Tijera" && computerChoice === "Papel")
    ) {
        result = "¡Ganaste! 🎉";
        playerScore++;
    }
    else {
        result = "¡Ganó la máquina! 🤖";
        computerScore++;
    }

    // Actualizar el resultado y los puntos
    document.getElementById("resultText").textContent = result;
    document.getElementById("playerScore").textContent = playerScore;
    document.getElementById("computerScore").textContent = computerScore;
}

// Reiniciar el juego
function resetGame() {
    playerScore = 0;
    computerScore = 0;

    document.getElementById("playerScore").textContent = 0;
    document.getElementById("computerScore").textContent = 0;

    document.getElementById("playerChoice").textContent = "Tu elección: -";
    document.getElementById("computerChoice").textContent = "Elección de la máquina: -";
    document.getElementById("resultText").textContent = "¡Que empiece el juego!";
}
