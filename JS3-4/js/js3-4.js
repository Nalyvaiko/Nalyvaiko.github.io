var genPage = {
  pageBody: document.body,

  // Object of consts
  pageConst: {
    pageTitle: "Тест по программированию",
    pageQuestion: ["Вопрос №1", "Вопрос №2", "Вопрос №3"],
    pageAnswers: [["Вариант ответа №1", "Вариант ответа №2", "Вариант ответа №3"], ["Вариант ответа №1", "Вариант ответа №2", "Вариант ответа №3"], ["Вариант ответа №1", "Вариант ответа №2", "Вариант ответа №3"]]
  },

  elementTag: ["h1", "ul", "li", "input"],

  // Генерация заголовка
  genTitle: function() {
    var titleText = this.pageConst.pageTitle;
    var titleTag = this.elementTag[0];

    var title = document.createElement(titleTag);
    title.appendChild(document.createTextNode(titleText));
    this.pageBody.appendChild(title);
  }
}
