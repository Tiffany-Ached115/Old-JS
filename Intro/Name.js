var myName = prompt('Как ваше имя?');
var mySurname = prompt('Как ваша фамилия?');
var myBirthYear = prompt('Введите ваш год рождения');
var currentYear = 2019;
var age = currentYear - myBirthYear;
if (age<20){
	alert('Привет, ' + myName + ' ' + mySurname + '!');
}
else if (age>=20 && age<40){
	alert ('Добрый день, ' + myName + ' ' + mySurname + '!');
}
else {
	alert ('Здравствуйте, ' + myName + ' ' + mySurname + '!')
}