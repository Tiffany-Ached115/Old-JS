var editText = document.querySelector ('#for-edit');
var editButton = document.querySelector ('.edit-button');
var saveButton = document.querySelector ('.save-button');
var cancelButton = document.querySelector ('.cancel-button');
var vers = document.querySelector('#versions');
var i = 0;
var newOption = [];
var actualText;
var newDate;
var newSaveDate;
var newSaveMonth;
var newSaveYear;
var newSaveHours;
var newSaveMinutes;
var notChangedText = localStorage.setItem ('firstVersion', editText.innerHTML);
editButton.addEventListener ('click', function (ev){
	if (!editText.isContentEditable) {
	editText.contentEditable = 'true';
	editButton.disabled = true;
	editButton.style.color = '#888888';
	saveButton.disabled = false;
	saveButton.style.color = '#ffffff';
	cancelButton.disabled = false;
	cancelButton.style.color = '#ffffff';
	};
});
saveButton.addEventListener ('click', function (ev){
	var saveVersions = JSON.parse(localStorage.getItem('allversions')) || [];
	var versionDates = JSON.parse(localStorage.getItem('alldates')) || [];
    var actualText = document.getElementById('for-edit').innerHTML;
	var newDate = new Date();
	var newSaveDate = newDate.getDate();
	var newSaveMonth = newDate.getMonth()+1;
	var newSaveYear = newDate.getFullYear();
	var newSaveHours = newDate.getHours();
	var newSaveMinutes = newDate.getMinutes();
	var saveDate = 'Версия ' + newSaveDate + '.' + newSaveMonth + '.' + newSaveYear + ', ' + newSaveHours + ':' + newSaveMinutes;
	saveVersions.push(actualText);
	versionDates.push(saveDate);
	localStorage.setItem ('allversions', JSON.stringify(saveVersions));
	localStorage.setItem ('alldates', JSON.stringify(versionDates));
	editText.contentEditable = 'false';
	editButton.disabled = false;
	editButton.style.color = '#ffffff';
	saveButton.disabled = true;
	saveButton.style.color = '#888888';
	cancelButton.disabled = true;
	cancelButton.style.color = '#888888';
})
saveVersions = JSON.parse(localStorage.getItem('allversions'));
versionDates = JSON.parse(localStorage.getItem('alldates'));
if (versionDates !== null){
	while (i < versionDates.length) {
		newOption[i] = document.createElement('OPTION');
		newOption[i].innerHTML = versionDates[i]; 
		vers.appendChild (newOption[i]);
		i++;
	}
}
vers.addEventListener ('change', function(ev){
	var a = vers.options.selectedIndex;
	console.log (a);
	editText.innerHTML = saveVersions[a];
})
cancelButton.addEventListener ('click', function (ev){
	if (saveVersions !== null){
		editText.innerHTML = saveVersions[saveVersions.length-1];
	}
	else {
		editText.innerHTML = localStorage.getItem ('firstVersion');
	}
})