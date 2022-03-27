(function () {
	function createRandomNumber (min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	var secretNumber = createRandomNumber (1, 1000);
	var tryCount = 0;
	window.start = function (myNumber){
	while (tryCount < 10) {
				if (myNumber !== null){
				if (myNumber == ''){
					if (confirm ('Введите какое-либо значение') === true){
 						myNumber = prompt ('Введите число от 1 до 1000');
 						}
 					else {
 						break;
 						}
 					}
 				else {
					myNumber = + myNumber;
					if (isNaN (myNumber) === true) {
						alert ('Введите числовое значение');
 						myNumber = prompt ('Введите число от 1 до 1000');
 						}
 					else if (secretNumber == myNumber) {
						alert ('Правильно!');
						if (confirm ('Загадайте новое число') === true){
							tryCount = 0;
							secretNumber = createRandomNumber (1, 1000);
							return arguments.callee();}
						else {
							break;
							alert ('Игра окончена');
							}
						}	
 					else if (myNumber > secretNumber) {
 						alert ('Меньше!');
 						myNumber = prompt ('Введите другое число');
 						tryCount++;
 						}
	 				else if (myNumber < secretNumber) {
 						alert ('Больше!');
 						myNumber = prompt ('Введите другое число');
 						tryCount++;
 						}
					}
				}	
			else {
				break;
				return alert ('Игра окончена');
				}
		}
	if (confirm ('Количество попыток превышено! Загадайте новое число') === true){
				tryCount = 0;
				secretNumber = createRandomNumber (1, 1000);
				arguments.callee();}
			else {
				return alert ('Игра окончена');
			}
	}	
})();
