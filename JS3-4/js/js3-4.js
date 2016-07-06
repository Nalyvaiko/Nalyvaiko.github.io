var genPage = {
  flag: true,
  pageBody: document.body,

  // Object of consts
  pageConst: {
    pageTitle: "Тест по программированию",
    pageQuestion: ["Вопрос №1", "Вопрос №2", "Вопрос №3"],
    pageAnswers: [["Вариант ответа №1", "Вариант ответа №2", "Вариант ответа №3"], ["Вариант ответа №1", "Вариант ответа №2", "Вариант ответа №3"], ["Вариант ответа №1", "Вариант ответа №2", "Вариант ответа №3"]]
  },

  elementTag: ["h1", "ol", "li", "input", "ul"],

  // Генерация заголовка
  generate: function() {
    if (this.flag) {
      var titleText = this.pageConst.pageTitle;
      var titleTag = this.elementTag[0];

      var title = document.createElement(titleTag);
      title.style.textAlign = "center";
      title.appendChild(document.createTextNode(titleText));
      this.pageBody.appendChild(title);

      // Генерация списка
      var ol = this.elementTag[1];
      var li = this.elementTag[2];
      var input = this.elementTag[3];
      var ul = this.elementTag[4];

      var questionArr = this.pageConst.pageQuestion;
      var answerArr = this.pageConst.pageAnswers;

      var list = document.createElement(ol);
        for (var i = 0; i < questionArr.length; i++) {

            // Создать вопрос
            var elemLi = document.createElement(li);
            elemLi.innerHTML = questionArr[i];

            var elemUl = document.createElement(ul);
            elemUl.style.padding = "0";
            elemLi.appendChild(elemUl);

            // Ответы на вопрос
            for (var j = 0; j < answerArr[i].length; j++) {
              var elemLiChild = document.createElement(li);
              elemLiChild.style.listStyle = "none";

              var answer = document.createElement(input);
              answer.setAttribute("type", "checkbox");

              elemLiChild.appendChild(answer);
              elemLiChild.appendChild(document.createTextNode(answerArr[i][j]));
              elemUl.appendChild(elemLiChild);
            }

          list.appendChild(elemLi);
        }
      this.pageBody.appendChild(list);


      // Генерация кнопки
      var input = this.elementTag[3];
      var button = document.createElement(input);
      button.setAttribute("type", "submit");
      button.setAttribute("value", "Проверить мои результаты");
      button.style.margin = "10px 0 0 35%";
      button.style.border = "1px solid black";
      button.style.height = "31px";
      button.style.width = "201px";
      this.pageBody.appendChild(button);

      this.flag = false;
    } else {
      console.log("--------------------------");
      console.log("--- Page already exist ---");
      console.log("--------------------------");
    }
  }
}
