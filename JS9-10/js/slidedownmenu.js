$(function(){
      $('.dropdown').hover(

        function() {
          $submenu = $(this).children('.sub-menu');
          $submenu.slideDown(200);
          $submenu.addClass("color", 1000);
        },

        function() {
          $submenu = $(this).children('.sub-menu');
          $submenu.slideUp(200);
          $submenu.removeClass("color", 1000);
        }
  )
});
