let money, 
	name, 
	time,
	price 

function start(argument) {
	money = +prompt("Enter your budget");
	name = prompt("Enter your shop name").toUpperCase();
	time = 19;
}

start();

let mainList = {
	budget: money,
	shopName: name,
	shopGoods: [],
	employers: {},
	open: false,
	discount: false
}

function chooseGoods() {
	for (let i = 0; i < 3; i++) {
		let ask = prompt("What kind of goods will you sell?");

		if((typeof(ask)) === 'string' && (typeof(ask)) === null && ask != '' && ask.length < 50) {
			console.log('That\'s right!');
			mainList.shopGoods[i] = ask;
		} else {
			i = i - 1;
		}
	}
}
chooseGoods();

function workTime(time) {
	if(time < 0) {
		console.log('That\'s impossible!');
	} else if(time > 8 && time < 20) {
		console.log('It time to work!');
	} else if(time < 24) {
		console.log('It too late!');
	} else {
		console.log('There is only 24 hours in a day!');
	}
}
workTime();

function budgetCount() {
	alert(mainList.budget / 30);	
}
budgetCount();

function discountSystem() {
	if (mainList.discount == true) {
		price = price * 0.80;
	}
}
discountSystem();

function hireEmployers() {
	for (var i = 0; i < 4; i++) {
		employerName = prompt("Enter employer name!");
		mainList.employers[i] = employerName;
	}
}
hireEmployers();

console.log(mainList);