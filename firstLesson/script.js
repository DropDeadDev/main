let money, 
	name, 
	time,
	price 

function start() {
	money = +prompt("Enter your budget", "");
	name = prompt("Enter your shop name", "").toUpperCase();
	time = 19;
}

start();

let mainList = {
	budget: money,
	shopName: name,
	shopGoods: [],
	employers: {},
	open: false,
	discount: false,
	shopItems: [],
	chooseGoods: function chooseGoods() {
		for (let i = 0; i < 3; i++) {
			let ask = prompt("What kind of goods will you sell?", "");

			if((typeof(ask)) === 'string' && (typeof(ask)) === null && ask != '' && ask.length < 50) {
				console.log('That\'s right!');
				mainList.shopGoods[i] = ask;
			} else {
				i = i - 1;
			}
		}
	},
	workTime: function workTime(time) {
		if(time < 0) {
			console.log('That\'s impossible!');
		} else if(time > 8 && time < 20) {
			console.log('It time to work!');
			mainList.open = true;
		} else if(time < 24) {
			console.log('It too late!');
		} else {
			console.log('There is only 24 hours in a day!');
		}
	},
	budgetCount: function budgetCount() {
		alert(mainList.budget / 30);	
	},
	makeDiscount: function makeDiscount() {
		if (mainList.discount == true) {
			price = (price / 100) * 80;
		}
	},
	hireEmployers: function hireEmployers() {
		for (let i = 0; i < 4; i++) {
			let name = prompt("Enter employer name!", "");
			mainList.employers[i] = name;
		}
	},
	chooseShopItem: function chooseShopItem() {
		let items = prompt("Enter your items separated with comma!", "")
		mainList.shopItems = items.split(",");
		mainList.shopItems.push(prompt("Wait, something else?", ""));
		mainList.shopItems.sort();
	}
}

console.log(mainList);