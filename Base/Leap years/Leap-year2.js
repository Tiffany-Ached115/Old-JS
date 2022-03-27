var startYear = prompt ('Введите начальный год');
var finalYear = prompt ('Введите конечный год');
if (finalYear>startYear) {
	for (var i=startYear; i<=finalYear; i++){
		if (i%4 != 0 ){
			alert (i + ' Обычный год')
		}
		else if (i%100 != 0){
			alert (i + ' Високосный год')
		}
		else if (i%400 == 0){
			alert (i + ' Столетие и високосный год')
		}
		else{
			alert (i + ' Столетие, но год невисокосный')
		}
	}
}
	else if (finalYear<startYear) {
		for (var i=startYear; i>=finalYear; i--){
		if (i%4 != 0 ){
			alert (i + ' Обычный год')
		}
		else if (i%100 != 0){
			alert (i + ' Високосный год')
		}
		else if (i%400 == 0){
			alert (i + ' Столетие и високосный год')
		}
		else{
			alert (i + ' Столетие, но год невисокосный')
		}
	}
	}
	else {
		alert ('Значения начального и конечного годов не могут быть равны');
	}

	