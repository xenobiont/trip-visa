# Task

rewrite the code, using async / await
Program should be lauched by the main function trip, that should take 'passpart' object as argument

Errors handling should work

Ask user for confirmation before the flight (add 'valid' property to the ticket, if confirmed). Use window.confirm

Check ticket's validity before boarfing the plane and throw error 'the flight was not confirmed' if the ticket is not valid.

```js
function getVisa(passport) {
	return new Promise(function (resolve, reject) {
		const forbiddenNames = ['Rick', 'Morty'];

		setTimeout(function checkDocuments() {
			if (passport.isValid && !forbiddenNames.includes(passport.name))
				resolve({
					type: 'visa',
					name: passport.name,
				});
			else
				reject(
					new Error(
						'visa request rejected, your passport is not valid or your name is on the forbidden list',
					),
				);
		}, 3000);
	});
}

getVisa({
	name: 'Joe',
	isValid: true,
})
	.then((visa) => {
		console.log(visa);
		return visa;
	})
	.then((visa) => {
		const money = 3000;

		if (!visa)
			throw new Error('You vacation request was rejected by your manager!');
		else return money;
	})
	.then((money) => {
		if (!money) throw new Error('Not enough money to buy the tickets!');

		const ticket = {
			type: 'ticket',
			timeToFlight: 2000,
		};
		return ticket;
	})
	.then((ticket) => {
		return new Promise((resolve, reject) =>
			setTimeout(() => {
				ticket.timeToFlight = 0;
				resolve(ticket);
			}, ticket.timeToFlight),
		);
	})
	.then((ticket) => {
		if (!ticket) throw new Error('You forgot to take your ticket with you!');
		else console.log('Congratulations, you are on board!');
		// летим!
	})
	.catch((error) => {
		console.log(error);
	})
	.finally(() => {});
```
