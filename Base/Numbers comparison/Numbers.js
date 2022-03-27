var firstNumber = prompt('Введите первое число');
var secondNumber = prompt('Введите второе число');
if (firstNumber === undefined || secondNumber === undefined){
	alert ('Вы не ввели значение');}
	else if (isNaN(firstNumber) === true || isNaN(secondNumber) === true){
	alert ('Введите числовые значения')
	}
	else if (firstNumber > secondNumber){
	alert('Первое число больше второго');
	}
	else if (secondNumber > firstNumber){
	alert ('Второе число больше первого');
	}
	else if (firstNumber == secondNumber){
	alert ('Числа равны');	
	}

	