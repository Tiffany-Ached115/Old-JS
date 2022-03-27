class Vehicle {
	constructor (name, colour, age) {
		this.name = name;
		this.colour = colour;
		this.age = age;
	}
	getFullName () {
		return this.name + ', ' + this.colour + ', ' + this.age;	
	}
}
class Car extends Vehicle {
	constructor (name, colour, age){
		super(name, colour, age);
	}
	getFullName() {
		return 'Автомобиль ' + super.getFullName();
	}
}
class Ship extends Vehicle {
	constructor (name, colour, age, type){
		super (name, colour, age);
		this.name = name + ' ' + type;
	}
	getFullName() {
		return 'Корабль ' + super.getFullName();
	}
}
class Airplane extends Vehicle {
	constructor (name, colour, age) {
		super (name, colour, age);
	}
	getFullName () {
		return 'Самолёт ' + super.getFullName();
	}
}
 const Vaz = new Car ('ВАЗ', 'синий', '10 лет');
 const Yacht = new Ship ('яхта', 'белый', '2 года', 'морская');
 const Tu = new Airplane ('ТУ-154', 'серый', '7 лет');
 console.log (Vaz.getFullName());
 console.log (Yacht.getFullName());
 console.log (Tu.getFullName());

