(function() {
  var Question = function(data) {
    this.id = data.id;
    this.question = data.question;
    this.answer = data.answer;
    this.quizId = data.quiz_id;
    this.choices = data.choices.split(";");
  }; 

  Question.fetch = function(quizId, cb) {
    $.get("/quizzes/" + quizId + "/questions", function(questions) {
      var questObjs = questions.map(function(questionData) {
        return new Question(questionData);
      });
      if (cb) {
        cb(questObjs);
      }
    });
  };

  Question.find = function(quizId, questId, cb) {
    $.get("/quizzes/" + quizId + "/questions/" + questId, function(question) {
      var nextQuestion = new Question(question);
      if (cb) {
        cb(nextQuestion);
      }
    });
  };

  Question.create = function(quizId, question, answer, choices, cb) {
    $.ajax({
      method: "POST", 
      url: "/quizzes/" + quizId + "/questions",
      data: {"question[question]": question, 
        "question[answer]": answer, 
        "question[choices]": choices
      },
      success: function(data) {
        var newQuestion = new Question(data);
        if (cb) {
          cb(data);
        }
      }
    });
  };


  window.Models = window.Models || {};
  window.Models.Question = Question;
})();