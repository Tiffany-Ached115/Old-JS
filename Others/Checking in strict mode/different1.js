var Code = prompt ('Введите кусок JS-кода');
function Test (){
	'use strict'
	try {
	eval (Code);
	}
	catch (error){
		alert ('Возникла ошибка! Введите корректный код.');
	}
}
Test ();
