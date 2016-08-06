$(function() {

  var $leftArrow = $('.carousel-arrow-left');
  var $rightArrow = $('.carousel-arrow-right');
  var $elementsList = $('.carousel-list');

  var $pixelsOffset = 325;
  var $currentLeftValue = 0;

  var $elementsCount = $elementsList.find('li').length;
  var $minimumOffset = -(($elementsCount - 3) * $pixelsOffset);
  var $maximumOffset = 0;

  $leftArrow.on('click', function() {
    if ($currentLeftValue != $maximumOffset) {
      $currentLeftValue += 325;
      $elementsList.animate({ left: $currentLeftValue + "px" }, 500);
    }
  });

  $rightArrow.on('click', function() {
    if ($currentLeftValue != $minimumOffset) {
      $currentLeftValue -= 325;
      $elementsList.animate({ left: $currentLeftValue + "px" }, 500);
    }
  });

});
