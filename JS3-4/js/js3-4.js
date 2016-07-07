var genPage = {
  flag: true,
  pageBody: document.body,

  // Object of consts
  pageConst: {
    pageTitle: "Тест по программированию",
    pageQuestion: ["Вопрос №1", "Вопрос №2", "Вопрос №3"],
    pageAnswers: [["Вариант ответа №1", "Вариант ответа №2", "Вариант ответа №3"], ["Вариант ответа №1", "Вариант ответа №2", "Вариант ответа №3"], ["Вариант ответа №1", "Вариант ответа №2", "Вариант ответа №3"]]
  },

  elementTag: ["h1", "ol", "li", "input", "ul", "div"],

  generate: function() {
    if (this.flag) {
      // Генерация заголовка
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
      var div = this.elementTag[5];

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

              // Списком
              /*var elemLiChild = document.createElement(li);
              elemLiChild.style.listStyle = "none";

              var answer = document.createElement(input);
              answer.setAttribute("type", "checkbox");
              elemLiChild.appendChild(answer);
              elemLiChild.appendChild(document.createTextNode(answerArr[i][j]));*/

              // Label + input
              var label = document.createElement('label');
              var answer = document.createElement(input);
              label.style.display = "block";
              answer.setAttribute("type", "checkbox");
              label.appendChild(answer);
              label.appendChild(document.createTextNode(answerArr[i][j]));

              elemUl.appendChild(label);
            }

          list.appendChild(elemLi);
        }
      this.pageBody.appendChild(list);


      // Генерация кнопки
      var button = document.createElement(input);
      var btnWrap = document.createElement(div);

      btnWrap.style.textAlign = "center";

      button.setAttribute("type", "submit");
      button.setAttribute("value", "Проверить мои результаты");
      button.style.border = "1px solid black";
      button.style.height = "30px";
      button.style.width = "200px";
      btnWrap.appendChild(button);
      this.pageBody.appendChild(btnWrap);

      this.flag = false;
    } else {
      console.log("--- Page already exist ---");
    }
  }
}
