$(function() {

  var $tabs = $('#tabs');

  // скрыть все вкладки, кроме первой
  $tabContent = $('.tabs-wrapper > div')
    .each(function(i) {
      (i != 0) ? $(this).hide(0) : $(this).show(0)
    });

  // событие клик на ссылки списка
  $tabs.on('click', '.tabs-header a', function(event){
    event.preventDefault();

    // аттрибут ссылки - строка ИД
    var tabId = $(this).attr('href')
    // удалить классы у ссылок, добавить класс для активной
    $('.tabs-header a').removeClass();
    $(this).addClass('active');

    // скрыть все DIV, по селектору id открыть выбранный
    $tabContent.hide();
    $(tabId).show();
  });

});
