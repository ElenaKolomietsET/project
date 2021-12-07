


/*$('.TodoItemClone').parentsUntil().siblings('.item').css('background', '#ef6e69');*/



$('.c1').click(function(){

$('.TodoItemClone:checked').parents('.container_input').siblings('.item').css('background', '#ef6e69');

$('#TodoItem:checked').parents('.container_input').siblings('.item').css('background', '#ef6e69');


});


$('.c2').click(function(){

$('.TodoItemClone:checked').parents('.container_input').siblings('.item').css('background', '#f279a2');

$('#TodoItem:checked').parents('.container_input').siblings('.item').css('background', '#f279a2');


});

$('.c3').click(function(){

$('.TodoItemClone:checked').parents('.container_input').siblings('.item').css('background', '#9170cb');

$('#TodoItem:checked').parents('.container_input').siblings('.item').css('background', '#9170cb');


});
$('.c4').click(function(){

$('.TodoItemClone:checked').parents('.container_input').siblings('.item').css('background', '#5eb3f6');

$('#TodoItem:checked').parents('.container_input').siblings('.item').css('background', '#5eb3f6');


});
$('.c5').click(function(){

$('.TodoItemClone:checked').parents('.container_input').siblings('.item').css('background', '#67d7e5');

$('#TodoItem:checked').parents('.container_input').siblings('.item').css('background', '#67d7e5');


});
$('.c6').click(function(){

$('.TodoItemClone:checked').parents('.container_input').siblings('.item').css('background', '#fee183');

$('#TodoItem:checked').parents('.container_input').siblings('.item').css('background', '#fee183');


});






$("#click").click(function () {	  	  
$(".div").addClass('create').last().clone().appendTo('.wrapper_div');

$('.div').prev().removeClass('create');

$('.Todo').removeClass('TodoText');

    });

$('#click').click(function(){
	      let colors = ['#ef6e69','#f279a2','#9170cb','#5eb3f6','#5eb3f6','#fee183'];


$(".create").find('.span_text_todo').css('display','none');

$(".create").find('.Todo').addClass('TodoText');
$(".create").find('.item').css('background',colors[Math.floor(Math.random() * colors.length)]);
$(".create").find('#TodoItem').addClass('TodoItemClone');

$('.div').attr('id', function() { return $('.div').index()+"1"; });

});




$('#click').click(function(){
	
var val = $('#AddNewItem').val();//Получаем данные из input
  $('.TodoText').html(val);//Вставляем значение в тег с классом txt

});


/*$('.c1').css('background', '#ef6e69');*/









            