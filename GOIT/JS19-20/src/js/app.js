$(function() {

  console.log('load');

  $('.jcarousel').jcarousel({
    animation: {
      duration: 800,
      easing: 'linear'
    }
  });

  $('.jcarousel-pagination').jcarouselPagination({
    item: function(page) {
      return '<a href="#' + page + '"></a>';
    }
  });

  $('.jcarousel-pagination').on('jcarouselpagination:active', 'a', function() {
      $(this).addClass('active');
    })
    .on('jcarouselpagination:inactive', 'a', function() {
      $(this).removeClass('active');
    })
    .jcarouselPagination();

  $('.jcarousel img').on('click', function() {
      $('.jcarousel').jcarousel('scroll', '+=1');
  });

  $('.services a').on('mouseover', function() {
        $($(this).parent().parent()).addClass('hover');
    });

    $('.services a').on('mouseleave', function() {
        $($(this).parent().parent()).removeClass('hover');
    });

});
