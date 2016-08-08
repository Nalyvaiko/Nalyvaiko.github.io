'use strict';

$(function() {


  // Template
  var $tmpl = $('#test-template').html();

  // Data
  var $data = {
    title: "Тест по программированию",
    questions: ["Президент США", "Вопрос №2", "Вопрос №3"],
    answers: [[{ proper: true, answer: "Барак Обама"}, { proper: false, answer: "Хилари Клинтон"}, { proper: false, answer: "Дональд Трамп"}],
    [{ proper: false, answer: "Вариант ответа №1"}, { proper: true, answer: "Вариант ответа №2"}, { proper: false, answer: "Вариант ответа №3"}],
    [{ proper: true, answer: "Вариант ответа №1"}, { proper: false, answer: "Вариант ответа №2"}, { proper: false, answer: "Вариант ответа №3"}]]
  };


  // Write to the local storage
  localStorage.setItem('testData', JSON.stringify($data));
  // Get object from the local storage
  var $data = JSON.parse(localStorage.getItem('testData'));


  // Render
  var $tmpl = _.template($tmpl);
  // Append Result
  $('body').append($tmpl($data));

  function checkAnswers() {
    
  };

});
