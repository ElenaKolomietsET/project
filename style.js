


$('#click').click(function(){
	
$(".div").find('#Todo').removeClass('create');

});


$("#click").click(function () {

      let colors = ['#ef6e69','#f279a2','#9170cb','#5eb3f6','#5eb3f6','#fee183'];
	  	  
/*$(".div").last().clone().appendTo('.wrapper_div').find('div.item').css('background',colors[Math.floor(Math.random() * colors.length)]);*/



$(".div").last().clone().appendTo('.wrapper_div').find('div.item').css('background',colors[Math.floor(Math.random() * colors.length)]).find('#Todo').addClass('create');

$(".div").last().clone().appendTo('.wrapper_div').find('#Todo').addClass('create');

$(".div").last().clone().appendTo('.wrapper_div').find(".span_text_todo").css('display','none');



    });
$('#click').click(function(){
	
var val = $('#AddNewItem').val();//Получаем данные из input
  $('.create').html(val);//Вставляем значение в тег с классом txt

});

