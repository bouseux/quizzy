(function() {
  var QuizController = function(parentElement) {
    this.parentElement = parentElement;
  };

  QuizController.prototype.showQuizzes = function() {
    var $el = $(this.parentElement);
    var _controller = this;
    Models.Quiz.fetch(function(quizzes) {
      var quizView = new Views.Quiz($el, quizzes, _controller);
    });
  };

  QuizController.prototype.createNewQuiz = function(quizTitle) {
    var $el = $(this.parentElement); 
    var _controller = this;
    Models.Quiz.create(quizTitle, function(newQuiz) {
      var newQuizView = new Views.newQuiz($el, newQuiz, _controller);
    });
  };

  window.Controllers = window.Controllers || {};
  window.Controllers.Quiz = QuizController;
})();

