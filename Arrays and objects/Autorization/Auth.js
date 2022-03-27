var userName = [];
userName[0] = {
	name: 'Васильев',
	login: 'Vasya',
	password: '151515'};
userName[1] = {
	name: 'Лавров',
	login: 'Lavr',
	password: '321456'};
userName[2] = {
	name: 'Кузнецова',
	login: 'Asya22',
	password: '111666'};
userName[3] = {
	name: 'Савельева',
	login: 'Tatiana115',
	password: '213006'};
var currentName = prompt ('Введите имя пользователя');
var	currentLogin = prompt ('Логин');
var	currentPassword = prompt ('Пароль');
function searchUser (currentName, currentLogin, currentPassword) {
var result;
for (var i = 0; i < userName.length; i++){
	if (currentName == userName[i].name && currentLogin == userName[i].login && currentPassword == userName[i].password){ 
		result = true;
		break;
		}
	else {
		result = false;
	}
}
return result;
}
if (searchUser(currentName, currentLogin, currentPassword) === false) {
	alert ('Ошибка авторизации');
}
else {
	alert ('Здравствуйте, ' + currentName + '!');
}
	
