var forTest = require('../src/js/test.js');

describe("forTest", function() {
    it("parse form data to array", function() {
        //prepare
        var result;
        // act
        result = forTest.serializeUserAnswers('h1=on&h2=on&h3=on');
        // console.log(result);
        expect(result).toEqual(['h1', 'h2', 'h3']);
    });
    it("parse js object to array of right answers", function() {
        //prepare
        var result;
        // act
        result = forTest.serializeCorrectAnswers(JSON.parse('{"questions":[{"name":"q0","title":"Вопрос №1","answers":["Вариант ответа №1","Вариант ответа №2","Вариант ответа №3","Вариант ответа №4","Вариант ответа №5"],"correct":["q0a0","q0a4"]},{"name":"q1","title":"Вопрос №2","answers":["Вариант ответа №1","Вариант ответа №2","Вариант ответа №3","Вариант ответа №4","Вариант ответа №5"],"correct":["q1a1","q1a3"]},{"name":"q2","title":"Вопрос №3","answers":["Вариант ответа №1","Вариант ответа №2","Вариант ответа №3","Вариант ответа №4","Вариант ответа №5"],"correct":["q2a2","q2a3"]}]}'));
        // console.log(result);
        expect(result).toEqual(['q0a0', 'q0a4', 'q1a1', 'q1a3', 'q2a2', 'q2a3']);
    });
    it("compare two arrays", function() {
        //prepare
        var result;
        // act
        result = forTest.checkAnswers(['test1', 'test3', 'test2'], ['test3', 'test2', 'test1']);
        // console.log(result);
        expect(result).toBe(true);
    });

});
