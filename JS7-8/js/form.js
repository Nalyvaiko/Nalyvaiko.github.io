$(function() {

  $tooltipElement = $('<p class="tooltip"></p>');

  $('input').hover(function() {
      if ($('.tooltip').length == 0) {
          var tooltipText = $(this).attr('label');
          $tooltipElement
            .text(tooltipText)
            .insertAfter($(this))
            .fadeIn('slow');
        }
      },
      function() {
          $('.tooltip').remove();
  });

  $('#btnHelp').on('click', function() {
      $('input').each(function(i) {
          var tooltipText = $(this).attr('label');
          $(this).after('<p class="tooltip">'+tooltipText+'</p>');
      });
  });

});
