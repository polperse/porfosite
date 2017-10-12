$(document).ready(function(){

  $('.btn').on("click", function(){
    $('.intro').fadeOut();
    $('.wrapper').show();
  });

  $('input.trigger').on("click", function() {
    $('.text-typing').toggle();
  });

});
