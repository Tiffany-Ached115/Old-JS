var ballWidth = $('.ball').width();
var ballHeight = $('.ball').height();
var fieldWidth = $('.field').width();
var fieldHeight = $('.field').height();
side = 0;
$('.ball').on('click', function () {
	var randomY = (Math.random() * (fieldHeight - 2*ballHeight) + ballHeight);
	if (side == 0) {
		$(this).animate ({top: randomY, left: (fieldWidth - ballWidth)}, 2000, 'swing', 
		function goalRight (){
			var $offsetTop = $('.ball').offset().top;
			var $offsetLeft = $('.ball').offset().left;
			if (($offsetTop >= (fieldHeight*0.32)) && ($offsetTop <= (fieldHeight*0.68))){
				if (($offsetLeft > (fieldWidth - 100))){
					alert('Гооол!');
				}
			}
		});
		side = 1;
	}
	else if (side == 1){
		$(this).animate ({top: randomY, left: 0},2000, 'swing', 
		function goalRight (){
			var $offsetTop = $('.ball').offset().top;
			var $offsetLeft = $('.ball').offset().left;
			if (($offsetTop >= (fieldHeight*0.32)) && ($offsetTop <= (fieldHeight*0.68))){
				if ($offsetLeft < 100){
					alert('Гооол!');
				}
			}
		});
		side = 0;
	}
})
