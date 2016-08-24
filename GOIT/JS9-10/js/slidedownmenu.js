$(function(){
      $('.dropdown').hover(

        function() {
          $(this).children('.sub-menu').slideDown(200).addClass('color');
        },

        function() {
          $(this).children('.sub-menu').slideUp(200).removeClass('color');
        }
  )
});
