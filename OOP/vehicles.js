function Vehicle (name, colour, age){
	this.name = name;
	this.colour =colour;
	this.age = age;
	this.getFullName = function () {
		return this.name + ', ' + this.colour + ', ' + this.age
	}
}
function Car (name, colour, age) {
	Vehicle.apply(this, arguments);
	var fullName = this.getFullName;
	this.getFullName = function () {
		fullName.call (this);
		return 'Автомобиль ' + this.name + ', ' + this.colour + ', ' + this.age
	}
}
function Ship (name, colour, age, type) {
	Vehicle.apply(this, arguments);
	this.name = name + ' ' + type;
	var fullName = this.getFullName;
	this.getFullName = function () {
		fullName.call (this);
		return 'Корабль ' + this.name + ', ' + this.colour + ', ' + this.age
	}
}
function Airplane (name, environment, age) {
	Vehicle.apply(this, arguments);
	var fullName = this.getFullName;
	this.getFullName = function () {
		fullName.call (this);
		return 'Самолёт ' + this.name + ', ' + this.colour + ', ' + this.age
	}
}
 var Vaz = new Car ('ВАЗ', 'синий', '10 лет');
 var Yacht = new Ship ('яхта', 'белый', '2 года', 'морская');
 var Tu = new Airplane ('ТУ-154', 'серый', '7 лет');
 console.log (Vaz.getFullName());
 console.log (Yacht.getFullName());
 console.log (Tu.getFullName());

