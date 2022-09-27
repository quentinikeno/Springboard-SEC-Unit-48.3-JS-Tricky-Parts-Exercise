function guessingGame() {
	// make a random number
	const target = Math.floor(Math.random() * 100);
	let numGuesses = 0;
	let hasWon = false;

	// return a function
	return function game(guess) {
		if (hasWon) return "The game is over, you already won!";

		numGuesses++;
		if (guess === target) {
			hasWon = true;
			return `You win! You found ${target} in ${numGuesses} guesses.`;
		}
		return guess < target
			? `${guess} is too low!`
			: `${guess} is too high!`;
	};
}

module.exports = { guessingGame };
