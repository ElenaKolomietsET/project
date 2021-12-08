


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



var button = document.querySelector('#click');
var input = document.querySelector('#AddNewItem');
button.addEventListener('click', function() {
  if(input.value !== "") {

$(".div").addClass('create').last().clone().appendTo('.wrapper_div');
$('.div').prev().removeClass('create');
 let colors = ['#ef6e69','#f279a2','#9170cb','#5eb3f6','#5eb3f6','#fee183'];
$(".create").css('background',colors[Math.floor(Math.random() * colors.length)]); 
$('.Todo').removeClass('TodoText');
$(".create").find('.span_text_todo').css('display','none');
$(".create").find('.Todo').addClass('TodoText');

$(".create").find('#TodoItem').addClass('TodoItemClone');
var val = $('#AddNewItem').val();//Получаем данные из input
  $('.TodoText').html(val);//Вставляем значение в тег с классом txt
$(".create").find('#TodoItem').prop('checked', false);
  } else{

  }
  	
}, false)

$('#click').click(function(){
	
$('#AddNewItem').val('');
});



$(document).on('keypress',function(e) {
	var input = document.querySelector('#AddNewItem');
    if(e.which == 13 && input.value !== "") {
$(".div").addClass('create').last().clone().appendTo('.wrapper_div');
$('.div').prev().removeClass('create');
 let colors = ['#ef6e69','#f279a2','#9170cb','#5eb3f6','#5eb3f6','#fee183'];
$(".create").css('background',colors[Math.floor(Math.random() * colors.length)]); 
$('.Todo').removeClass('TodoText');
$(".create").find('.span_text_todo').css('display','none');
$(".create").find('.Todo').addClass('TodoText');

$(".create").find('#TodoItem').addClass('TodoItemClone');
var val = $('#AddNewItem').val();//Получаем данные из input
  $('.TodoText').html(val);//Вставляем значение в тег с классом txt
$(".create").find('#TodoItem').prop('checked', false);
    } 
});


$(document).on('keypress',function(e) {
    if(e.which == 13) {


$('#AddNewItem').val('');


    }
});

