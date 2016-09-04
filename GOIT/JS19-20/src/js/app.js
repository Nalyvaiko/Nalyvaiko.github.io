$(function() {

  /*function loadJSON(callback) {
    var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
    xobj.open('GET', 'js/data.json', false);
    xobj.onreadystatechange = function () {
      if (xobj.readyState == 4 && xobj.status == "200") {
        // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
        callback(xobj.responseText);
      }
    };
    xobj.send(null);
  };

  var data;
  function getData() {
    loadJSON(function(response) {
      data = JSON.parse(response);
    });
  };
  getData();*/

  /*$.ajaxSetup({
    async: false
  });
  var data;
  $.getJSON('js/data.json', function(json) {
    data = json;
  });
  console.log(data);*/

  var data = $.ajax({
    async: false,
    url: 'js/data.json',
    dataType: 'json'
  }).responseJSON;

  console.log(data);
  console.log(_.map(data, 'skills'));
  var skills = _.sortBy(_.uniq(_.flatten(_.map(data, 'skills'))));
  console.log('skills: ', skills);
  var names = _.map(_.sortBy(data, ['friends']), 'name');
  console.log('names: ', names);
  var friends = _.uniq(_.map(_.flattenDeep(_.map(data, 'friends')), 'name'));
  console.log('friends: ', friends);


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

  $('.banners .title').on('click', function() {
    var $title = $(this);

    if ($title.hasClass('active')) {
      $title.removeClass('active');
      return;
    } else {
      $('.banners .title').each(function(i, e) {
        $(this).removeClass('active');
      });
      $title.addClass('active');
    }
  });
});
