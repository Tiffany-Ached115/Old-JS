function showTime () {
var d = new Date();
var todayDate = d.getDate();
var todayMonth = d.getMonth();
var todayYear = d.getFullYear();
var todayDay = d.getDay();
var todayHour = d.getHours();
var todayMinute = d.getMinutes();
var todaySecond = d.getSeconds();
var onScreen = 'Сегодня '+ todayDate;
if (todayMonth == 0){
	onScreen = onScreen + ' января ';
	}
else if (todayMonth == 1){
	onScreen = onScreen + ' февраля ';
	}
else if (todayMonth == 2){
	onScreen = onScreen + ' марта ';
}
else if (todayMonth == 3){
	onScreen = onScreen + ' апреля ';
}
else if (todayMonth == 4){
	onScreen = onScreen + ' мая ';
}
else if (todayMonth == 5){
	onScreen = onScreen + ' июня ';
}
else if (todayMonth == 6){
	onScreen = onScreen + ' июля ';
}
else if (todayMonth == 7){
	onScreen = onScreen + ' августа ';
}
else if (todayMonth == 8){
	onScreen = onScreen + ' сентября ';
}
else if (todayMonth == 9){
	onScreen = onScreen + ' октября ';
}
else if (todayMonth == 10){
	onScreen = onScreen + ' ноября ';
}
else {
	onScreen = onScreen + ' декабря ';
}
onScreen = onScreen + todayYear + ' года, ';
if (todayDay == 0){
	onScreen = onScreen + 'воскресенье, ';
}
else if (todayDay == 1){
	onScreen = onScreen + 'понедельник, ';
}
else if (todayDay == 2){
	onScreen = onScreen + 'вторник, ';
}
else if (todayDay == 3){
	onScreen = onScreen + 'среда, ';
}
else if (todayDay == 4){
	onScreen = onScreen + 'четверг, ';
}
else if (todayDay == 5){
	onScreen = onScreen + 'ппятница, ';
}
else if (todayDay == 6){
	onScreen = onScreen + 'суббота, ';
}
else {
	onScreen = onScreen + 'воскресенье, ';
}

function timeDeclension(todayTime, thisTime1, thisTime2, thisTime3) {
	var todayTime;
	var thisTime1;
	var thisTime2;
	var thisTime3;
	if (todayTime%10 == 1 && todayTime != 11){
		return thisTime1; 
	}
	else if (todayTime%10 == 2 || todayTime%10 == 3 || todayTime%10 == 4 && todayTime != 12 && todayTime != 13 && todayTime != 14){
		return thisTime2;
	}
	else if (todayTime == 11 || todayTime == 12 || todayTime == 13 || todayTime == 14) {
		return thisTime3;
	}
	else {
		return thisTime3;
	}
}
thisHour = timeDeclension(todayHour, ' час ', ' часа ', ' часов ');
thisMinute = timeDeclension(todayMinute, ' минута ', ' минуты ', ' минут ');
thisSecond = timeDeclension(todaySecond, ' секунда', ' секунды', ' секунд');
onScreen = onScreen + todayHour + thisHour + todayMinute + thisMinute + todaySecond + thisSecond;
console.log (onScreen);
}
setInterval (showTime, 1000);
