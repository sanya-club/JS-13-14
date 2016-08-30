'use strict;'
var createTest = {

  title: 'Тест по программированию',
  subtitle: 'Обратите внимание на некоторые вопросы есть несколько провильных ответов',
  QA: [
    {
      question: 'Зачем используется ключевое слово var?',
      answers: [
                'a. Для создания новой переменной',
                'b. Для вывода сообщения в отдельном окне',
                'c. Для вывода результатов программы на экран'
            ]

        },
    {
      question: 'Как создать объект?',
      answers: [
                'a. var obj =  Object;',
                'b. var obj = [];',
                'c. var obj = new Object();',
                'd. var obj = {};'
            ]
        },
    {
      question: 'Какой тип переменной null?',
      answers: [
                'a. String',
                'b. Undefined',
                'c. Object'
            ]
        }
    ]
};


var correctAnswer1 = createTest.QA[0].answers[0];
var correctAnswer2_1 = createTest.QA[1].answers[2];
var correctAnswer2_2 = createTest.QA[1].answers[3];
var correctAnswer3 = createTest.QA[2].answers[2];
var corectAnswersArr = [correctAnswer1, correctAnswer2_1, correctAnswer2_2, correctAnswer3];
var corectAnswers = corectAnswersArr.join(',');
console.log('correct=', corectAnswers);