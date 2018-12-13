let money = +prompt("Enter your budget");
let name = prompt("Enter your shop name");
let time = 19;

let mainList = {
	budget: money,
	shopName: name,
	shopGoods: [],
	employers: {},
	open: false
}

for (let i = 0; i < 3; i++) {
	let ask = prompt("What kind of goods will you sell?");

	if((typeof(ask)) === 'string' && (typeof(ask)) === null && ask != '' && ask.length < 50) {
		console.log('That\'s right!');
		mainList.shopGoods[i] = ask;
	} else {
		i = i - 1;
	}
}

if(time < 0) {
	console.log('That\'s impossible!');
} else if(time > 8 && time < 20) {
	console.log('It time to work!');
} else if(time < 24) {
	console.log('It too late!');
} else {
	console.log('There is only 24 hours in a day!');
}

alert(mainList.budget / 30);

console.log(mainList);