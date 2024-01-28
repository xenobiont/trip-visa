// Your code here
/* function timeoutPromise(cb, time) {
    return new Promise((resolve, reject) =>
      setTimeout(cb.bind(resolve, reject), time),
    );
  } */

function getVisa(passport) {
	const forbiddenNames = ['Rick', 'Morty'];

	return new Promise(function (resolve, reject) {
		setTimeout(function checkDocuments() {
			if (passport.isValid && !forbiddenNames.includes(passport.name))
				resolve({
					type: 'visa',
					name: passport.name,
				});
			else
				reject(
					new Error(
						'Visa request rejected, your passport is not valid or your name is on the forbidden list',
					),
				);
		}, 3000);
	});
}

function showVisa(visa) {
	console.log(visa);
}

function getMoney(visa) {
	const money = 3000;
	if (!visa)
		throw new Error('You vacation request was rejected by your manager!');
	else return money;
}

function getTicket(money) {
	if (!money) throw new Error('Not enough money to buy the ticket!');
	return {
		type: 'ticket',
		timeToFlight: 2000,
	};
}

function waitForFlight(ticket) {
	return new Promise((resolve, reject) =>
		setTimeout(() => {
			ticket.timeToFlight = 0;
			// if (window.confirm('Подтвердите свой рейс')) ticket.valid = true;
			resolve(ticket);
		}, ticket.timeToFlight),
	);
}

function board(ticket) {
	if (!ticket) throw new Error('You forgot to take your ticket with you!');
	if (!ticket.valid) throw new Error('You flight was not confirmed!');
	console.log('Congratulations, you are on board!');
}

trip({
	name: 'Joe',
	isValid: true,
});

async function trip(passport) {
	try {
		const visa = await getVisa(passport);
		showVisa(visa);
		const money = getMoney(visa);
		const ticket = getTicket(money);
		await waitForFlight(ticket);
		board(ticket);
	} catch (e) {
		console.log(e);
	}
}

export default trip;
