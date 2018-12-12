var budget = +prompt("Enter your budget");
var shopName = prompt("Enter your shop name");

var arr = ['meat', 'vegetables', 'books'];

var mainList = {
	budget: budget,
	shopName: shopName,
	shopGoods: arr,
	employers: 2,
	open: true
}

for (var i = 0; i < 3; i++) {
	var ask = prompt("What kind of goods will you sell?");
	arr.push(ask);
}

alert(mainList.budget / 30);
console.log(mainList.shopGoods);