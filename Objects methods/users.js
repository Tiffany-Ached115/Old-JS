function UserList (){
	var users = [];
function User (){
	var Name;
	while (Name !== null){
		Name = prompt ('Введите свои имя и фамилию');
		if (Name !== null){
		var newDate = new Date();
		var newRegDate = newDate.getDate();
		var newRegMonth = newDate.getMonth()+1;
		var newRegYear = newDate.getFullYear();
		var newRegHours = newDate.getHours();
		var newRegMinutes = newDate.getMinutes();
		var User = {
		name: '',
		lastName: '',
		regDate: ''	}; 
		this.name = Name.split(' ')[0];
		this.lastName = Name.split(' ')[1];
		this.regDate = newRegDate + '.' + newRegMonth  + '.' + newRegYear + ', ' + newRegHours + ':' + newRegMinutes;
		users.push (User);
	}
		else break;
		}
	}
	User();	
	var User1 = users[0].name + users[0].lastname + users[0].regDate;
	alert (User1);
	return users;
}
	UserList();
//this.name = Name.split(' ')[0];
//		this.lastName = Name.split(' ')[1];
//		this.regDate = newRegDate + '.' + newRegMonth  + '.' + newRegYear + ', ' + newRegHours + ':' + newRegMinutes;
//		alert ('Имя: ' + this.name + ' Фамилия: ' + this.lastName + ', ' + this.regDate); 
		

//		alert ('getFullName');


//function userList(){}
//}