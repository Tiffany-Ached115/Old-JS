var list = document.getElementById ('list');
var addButton = document.querySelector ('.add-button');
addButton.addEventListener ('click', function () {
	if  (document.querySelector('input').value !== '') {
		var newLi = document.createElement('LI');
		newLi.className = 'not-done';
		newLi.innerHTML = document.querySelector('input').value;
		list.appendChild(newLi);
		document.querySelector('input').value = '';
	}
	else {
		alert ('Поле не может быть пустым!');
	}
})
addEventListener ('click', function(ev){
	if (ev.target.tagName === 'LI'){
		if (ev.target.className == 'not-done'){
			ev.target.className = 'done';
		}
		else {
			ev.target.className = 'not-done';
		}
	}
})
