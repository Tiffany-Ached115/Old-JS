function UserList () {
	this.users = [];
	this.add = function (user){
		this.users.push(user);
	}
	this.getAllUsers = function (printUsers) {
		var i = 0;
		while (i < newUserList.users.length+1){
			console.log (newUserList.users[i].firstName + ' ' + newUserList.users[i].lastName + ' ' + newUserList.users[i].regDate + '\n');
			i++;
		}
	}
}
function User (fisrtName, lastName, regDate) {
	this.firstName = fisrtName;
	this.lastName = lastName;
	this.regDate = regDate;
	}
var newUserList = new UserList ();
while (newName !== null){
	var newName = prompt ('Введите имя и фамилию для регистрации');
	if (newName !== null){
		var FullName = newName.split(' ');
		firstName = FullName[0];
		lastName = FullName[1];
		var newDate = new Date();
		var newRegDate = newDate.getDate();
		var newRegMonth = newDate.getMonth()+1;
		var newRegYear = newDate.getFullYear();
		var newRegHours = newDate.getHours();
		var newRegMinutes = newDate.getMinutes();
		regDate = newRegDate + '.' + newRegMonth  + '.' + newRegYear + ', ' + newRegHours + ':' + newRegMinutes;
		var newUser  = new User (firstName, lastName, regDate);
		newUserList.add(newUser);
		}
	else break;
}	
newUserList.getAllUsers();