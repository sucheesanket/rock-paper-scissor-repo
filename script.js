function playGame(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    document.getElementById('player-choice').innerText = `You chose: ${playerChoice}`;
    document.getElementById('computer-choice').innerText = `Computer chose: ${computerChoice}`;

    let winner = '';

    if (playerChoice === computerChoice) {
        winner = "It's a Tie!";
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        winner = "You Win! 🎉";
    } else {
        winner = "Computer Wins! 😢";
    }

    document.getElementById('winner').innerText = winner;
}
