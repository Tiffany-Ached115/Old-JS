	var sum = 0;
	var number = 0; 
	while (number !== null){
		var number = prompt ('Введите число');	
		if (number !== null){
			var number = + number;
			if (isNaN(number) === false){
			sum += number;		
	}
	}
	}
	alert ('Сумма введённых чисел ' + sum);