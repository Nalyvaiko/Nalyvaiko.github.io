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

});
