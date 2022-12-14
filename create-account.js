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

	withdraw = (inputPin, amount) => {
		if (inputPin !== pin) return "Invalid PIN.";
		if (amount > balance)
			return "Withdrawal amount exceeds account balance. Transaction cancelled.";
		balance -= amount;
		return `Succesfully withdrew $${amount}. Current balance: $${balance}.`;
	};

	changePin = (oldPin, newPin) => {
		if (oldPin !== pin) return "Invalid PIN.";
		pin = newPin;
		return "PIN successfully changed!";
	};

	return {
		checkBalance,
		deposit,
		withdraw,
		changePin,
	};
}

module.exports = { createAccount };
