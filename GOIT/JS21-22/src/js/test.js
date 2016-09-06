var forTest = {
    test: {
        questions: [{
            name: 'q0',
            title: 'Вопрос №1',
            answers: ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3', 'Вариант ответа №4', 'Вариант ответа №5'],
            correct: ['q0a0', 'q0a4']
        }, {
            name: 'q1',
            title: 'Вопрос №2',
            answers: ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3', 'Вариант ответа №4', 'Вариант ответа №5'],
            correct: ['q1a1', 'q1a3']
        }, {
            name: 'q2',
            title: 'Вопрос №3',
            answers: ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3', 'Вариант ответа №4', 'Вариант ответа №5'],
            correct: ['q2a2', 'q2a3']
        }, {
            name: 'q3',
            title: 'Вопрос №4',
            answers: ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3', 'Вариант ответа №4', 'Вариант ответа №5'],
            correct: ['q3a3', 'q3a4']
        }, {
            name: 'q4',
            title: 'Вопрос №5',
            answers: ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3', 'Вариант ответа №4', 'Вариант ответа №5'],
            correct: ['q4a4', 'q4a1']
        }]
    },
    checkAnswers: function(answers, rigthAnswers) {
        answers = answers.sort();
        rigthAnswers = rigthAnswers.sort();
        return (answers.length === rigthAnswers.length) && rigthAnswers.every(function(e, i) {
            return e === answers[i];
        });
    },
    serializeUserAnswers: function(answers) {
        return answers.split('=on').join('').split('&');
    },
    serializeCorrectAnswers: function(obj) {
        let result = [];
        obj.questions.forEach(function(question) {
            question.correct.forEach(function(correct) {
                result.push(correct);
            });
        });
        return result;
    }
};

try {
    module.exports = forTest;
} catch (ex) { }
