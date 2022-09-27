function createAccount(pin, balance = 0) {
	checkBalance = (inputPin) => {
		if (inputPin !== pin) return "Invalid PIN.";
		return `$${balance}`;
	};

	deposit = (inputPin, amount) => {
		if (inputPin !== pin) return "Invalid PIN.";
		balance += amount;
		return `Succesfully deposited $${amount}. Current balance: $${balance}.`;
	};

	return {
		checkBalance,
		deposit,
	};
}

module.exports = { createAccount };
