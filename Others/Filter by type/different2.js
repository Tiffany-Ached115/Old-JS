function FilterOfType () {
	var args = Array.prototype.slice.call (arguments);
	var sameType = new Array;
	var type = args[0];
	var i = 1;
	while (i < args.length + 1) {
		if (typeof args[i] == type) {
			sameType.push(args[i])
		}
		i++;
	}
	alert (sameType.join(', '));
}
FilterOfType ('boolean', 12, 20, true, 'red', 'false', 'hello', false);
