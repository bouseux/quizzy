(function() {
  var Quiz = function(data) {
    this.title = data.title;
    this.id = data.id;
  };

  Quiz.fetch = function(cb) {
    $.ajax({
      method: "GET",
      url: "/quizzes",
      success: function(quizzes) {
        var quizObjs = quizzes.map(function(quizData) {
          return new Quiz(quizData);
        });
        if (cb) {
          cb(quizObjs);
        }
      }
    });
  };

  Quiz.create = function(quiz, cb) {
    $.ajax({
      method: "POST", 
      url: "/quizzes",
      data: {"quiz[title]": quiz},
      success: function(data) {
        var newQuiz = new Quiz(data); 
        if (cb) {
          cb(newQuiz);
        }
      }
    });
  };

  Quiz.prototype.save = function(cb) {
    // use this.id, this.title to make ajax request
  };

  window.Models = window.Models || {};
  window.Models.Quiz = Quiz;
})();