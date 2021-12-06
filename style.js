$("button").click(function () {

      
	  
	  function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};
$("#div").last().clone().css('background','rgb('+getRandomInt(0,255)+', '+getRandomInt(0,255)+', '+getRandomInt(0,255)+')').appendTo('body');

    });
