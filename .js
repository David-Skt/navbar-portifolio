$(document) .ready(function() {

    var menu = $('.menu');

    $(menu).on('click', function() {
      
      $('.nav-list ').toggleClass('open');

    }); 
});