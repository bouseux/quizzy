(function() {
  var Question = function(data) {
    this.id = data.id;
    this.question = data.question;
    this.answer = data.answer;
    this.choices = data.choices.split(";");
    this.type = data.type;
  }

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

  window.Models = window.Models || {};
  window.Models.Question = Question;
})();