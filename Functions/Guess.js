var min;
var max;
var myNumber = prompt ('Введите число от 1 до 100');
function createRandomNumber (min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
var secretNumber = createRandomNumber (1, 100);
function guessNumber (myNumber){
while (myNumber !== null){
	if (myNumber !== null){
		if (myNumber == ''){
			alert ('Введите какое-либо значение');
 			myNumber = prompt ('Введите число от 1 до 100');
 		}
 		else {
			myNumber = + myNumber;
			if (isNaN (myNumber) === true) {
				alert ('Введите числовое значение');
 				myNumber = prompt ('Введите число от 1 до 100');
 			}
			else if (secretNumber == myNumber) {
				alert ('Правильно!');
				myNumber = prompt ('Загадайте новое число');
				secretNumber = createRandomNumber (1, 100);
 			}
 			else if (myNumber > secretNumber) {
 				alert ('Меньше!');
 				myNumber = prompt ('Введите другое число');
 			}
 			else if (myNumber < secretNumber) {
 				alert ('Больше!');
 				myNumber = prompt ('Введите другое число');
 			}
		}
	}
	else {
		break;
	}
}
alert ('Игра окончена');
return (myNumber);
}
guessNumber (myNumber);