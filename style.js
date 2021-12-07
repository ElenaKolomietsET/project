



$("#click").click(function () {


	  	  
$(".div").addClass('create').last().clone().appendTo('.wrapper_div');

$('.div').prev().removeClass('create');

$('.Todo').removeClass('TodoText');

    });

$('#click').click(function(){
	      let colors = ['#ef6e69','#f279a2','#9170cb','#5eb3f6','#5eb3f6','#fee183'];


$(".create").find('.span_text_todo').css('display','none');

$(".create").find('.Todo').addClass('TodoText');
$(".div").find('.item').css('background','colors[ Math.floor(Math.random() * colors.length) ]');

});





/*
$('#click').click(function(){
	
$(".create").find('.Todo').removeClass('TodoItem');

});*/


$('#click').click(function(){
	
var val = $('#AddNewItem').val();//Получаем данные из input
  $('.TodoText').html(val);//Вставляем значение в тег с классом txt

});

