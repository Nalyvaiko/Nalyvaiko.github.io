'use strict';

$(function() {

  var conf = {
    animation: {
      duration: 500,
      easing: 'linear'
    }
  };

  $('.carousel--step1').jcarousel(conf);

  $('.carousel--step1 .arrownext').click(function() {
    $('.carousel--step1').jcarousel('scroll', '+=1');
  });

  $('.carousel--step1 .arrowprevious').click(function() {
    $('.carousel--step1').jcarousel('scroll', '-=1');
  });

  $('.carousel--step2').jcarousel(conf);

  $('.carousel--step2 .arrownext').click(function() {
    $('.carousel--step2').jcarousel('scroll', '+=1');
  });

  $('.carousel--step2 .arrowprevious').click(function() {
    $('.carousel--step2').jcarousel('scroll', '-=1');
  });

  $('.carousel--step3').jcarousel(conf);

  $('.carousel--step3 .arrownext').click(function() {
    $('.carousel--step3').jcarousel('scroll', '+=1');
  });

  $('.carousel--step3 .arrowprevious').click(function() {
    $('.carousel--step3').jcarousel('scroll', '-=1');
  });

  const defKeywords = 'sport health extreme games culture relaxation travelling';
  const $searchInput = $('#searchInput');
  const $searchButton = $('#searchButton');
  const $gallery = $('.my-gallery-class');

  getImages(defKeywords);

  $searchButton.on('click', function() {
    newSearch();
  });

  $searchInput.on('keypress', function(e) {
    if (e.which === 13) {
      newSearch();
    }
  });

  function newSearch() {
    let keywords = $searchInput.val().length > 0 ? $searchInput.val() : defKeywords;
    $gallery.masonry('destroy');
    getImages(keywords);
  };

  function getImages(keywords) {
    $.ajax({
      url: 'https://api.datamarket.azure.com/Bing/Search/v1/Composite?Sources=%27Image%27&$format=json&$top=15&$skip=15&Query=%27'+ keywords + '%27',//&ImageFilters=%27Size%3aSmall%27',
      headers: {
        'Authorization': 'Basic ' + btoa('MbfQyJYgDJkVhKwyyV/dJqFoNrxhauqxCSa7+/udzmU=:MbfQyJYgDJkVhKwyyV/dJqFoNrxhauqxCSa7+/udzmU=')
    	},
      success: function(json) {
        let data = json.d.results[0];
        console.log(data);
        renderList(data);
      }
    });
  };

  function loadMasonry() {
    $gallery.imagesLoaded(function() {
      $gallery.masonry({
        itemSelector : '.grid-item',
        transitionDuration: 500,
        percentPosition: true,
        fitWidth: true,
        gutter: 10
      });
      $gallery.masonry('layout');
    })
  };

  function renderList(data) {
    let $list = $('#list');
    let $searchTmpl = $('#search-template').html();
    let $tmpl = _.template($searchTmpl);
    $list.html($tmpl(data));
    loadMasonry();
  };

});
