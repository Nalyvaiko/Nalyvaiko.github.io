'use strict';

$(function() {

    var $body = $('body');

    // Template
    var $tmpl = $('#test-template').html();

    // Data
    var $data = {
        title: "Тест по программированию",
        questions: ["Вопрос №1: (function() { return typeof arguments; })();", "Вопрос №2: var y = 1, x = y = typeof x; x;", "Вопрос №3: (function f(f) { return typeof f(); })(function(){ return 1; });"],
        answers: [[{ proper: true, answer: "object"}, { proper: false, answer: "array"}, { proper: false, answer: "undefined"}],
        [{ proper: false, answer: "1"}, { proper: true, answer: "\"undefined\""}, { proper: false, answer: "\"number\""}],
        [{ proper: true, answer: "\"number\""}, { proper: false, answer: "\"undefined\""}, { proper: false, answer: "Error"}]]
    };

    // Write to the local storage
    localStorage.setItem('testData', JSON.stringify($data));
    // Get object from the local storage
    var $data = JSON.parse(localStorage.getItem('testData'));

    // Render
    var $tmpl = _.template($tmpl);
    // Append Result
    $body.append($tmpl($data));

    $('#submit').on('click', checkAnswers);

    // Check answers
    function checkAnswers() {
      var messagePassed = 'Тест успешно пройден!'
      var messageNotPassed = 'Не правильно отвеченный вопрос(ы): ';
      var notPassed = false;
      var answerWrong = false;

      var $res = $('li ul');

      $.each($res, function(i, question) {
        var $radioArray = $(question).find("input[type=radio]"); // 3 Arrays of radio in each()
        for ( var j = 0; j < $data.answers[i].length; j++ ) {
          if ($radioArray[j].checked !== $data.answers[i][j].proper) {
            notPassed = true;
            answerWrong = true;
          }
        }

        if (answerWrong) {
          messageNotPassed += ((i + 1) + ' ');
        }
        answerWrong = false;
      });

      $(this).addClass('pushed');
      if (notPassed) {
        showModal(messageNotPassed);
        // Если не пройден тест - очистить радио
        $.each( $("input[type=radio]"), function() {
          this.checked = false;
        });
      } else {
        showModal(messagePassed);
      }
    };

    // ---------------------------------- Модальное окно -------------------------------------------------------------
    function showModal(message) {
      $('#overlay').fadeIn(400, function() { // пoсле выпoлнения предъидущей aнимaции
				$('#modal_form')
          .text(message)
					.css('display', 'block') // убирaем у мoдaльнoгo oкнa display: none;
					.animate({opacity: 1, top: '50%'}, 200); // плaвнo прибaвляем прoзрaчнoсть oднoвременнo сo съезжaнием вниз
		  });
    }
    /* Зaкрытие мoдaльнoгo oкнa, тут делaем тo же сaмoе нo в oбрaтнoм пoрядке */
    $('#overlay').click( function(){ // лoвим клик пo крестику или пoдлoжке
    	$('#modal_form')
    		.animate({opacity: 0, top: '45%'}, 200,  // плaвнo меняем прoзрaчнoсть нa 0 и oднoвременнo двигaем oкнo вверх
    			function() { // пoсле aнимaции
    				$(this).css('display', 'none'); // делaем ему display: none;
    				$('#overlay').fadeOut(400); // скрывaем пoдлoжку
    			}
    		);
      $('.pushed').removeClass('pushed');
    });
});
