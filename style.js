


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



});




$('#click').click(function(){
	
var val = $('#AddNewItem').val();//Получаем данные из input
  $('.TodoText').html(val);//Вставляем значение в тег с классом txt







});




$(document).on('keypress',function(e) {
    if(e.which == 13) {
      
$(".div").addClass('create').last().clone().appendTo('.wrapper_div');

$('.div').prev().removeClass('create');

$('.Todo').removeClass('TodoText');
    }
});



$(document).on('keypress',function(e) {
    if(e.which == 13) {
        
    

 let colors = ['#ef6e69','#f279a2','#9170cb','#5eb3f6','#5eb3f6','#fee183'];


$(".create").find('.span_text_todo').css('display','none');

$(".create").find('.Todo').addClass('TodoText');
$(".create").find('.item').css('background',colors[Math.floor(Math.random() * colors.length)]);
$(".create").find('#TodoItem').addClass('TodoItemClone');

    }
});

$(document).on('keypress',function(e) {
    if(e.which == 13) {
  
        var val = $('#AddNewItem').val();//Получаем данные из input
  $('.TodoText').html(val);//Вставляем значение в тег с классом txt

$('.test')[0].reset();


/*if($('#TodoItem').value === null || $('#TodoItem').value === ""){
alert('!');

};*/



    }
});


/*
  if(document.getElementById("#TodoItem").value === '') {
    alert("!!!");
}*/



/*
$('.test').submit(function () {
    var form = $(this);
    var field = [];
    form.find('input[test]').each(function () {
      field.push('input[test]');
      var value = $(this).val(),
          line = $(this).closest('.input');
      for(var i=0;i<field.length;i++) {
        if( !value ) {
          line.addClass('some-form__line-required');
          setTimeout(function() {
            line.removeClass('some-form__line-required')
          }.bind(this),2000);
          event.preventDefault();
        }
      }
    });
  });
*/


            
var button = document.querySelectorAll('#click');
var input = document.querySelector('#TodoItem');
for (var i = 0; i < button.length; i++) {
  button[i].addEventListener('click', function() {
    if (input.value !== '') {
      alert('не пустой');
    }else{
    alert('Пустой');
    }
  })
}