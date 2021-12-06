$("#click").click(function () {

      let colors = ['#ef6e69','#f279a2','#9170cb','#5eb3f6','#5eb3f6','#fee183'];
	  
	  

$(".div").last().clone().appendTo('.wrapper_div').find('div.item').css('background',colors[Math.floor(Math.random() * colors.length)]);

    });





