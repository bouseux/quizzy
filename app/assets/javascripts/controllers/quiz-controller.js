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
      var newQuizView = new Views.NewQuiz($el, newQuiz, _controller);
    });
  };

  QuizController.prototype.quizIntermediary = function() {
    var $el = this.parentElement;
    var _controller = this;
    var intermediateView = new Views.SingleQuiz($el, _controller);
  };

  QuizController.prototype.newQuestion = function(id) {
    var $el = this.parentElement;
    var _controller = this;
    var addQuestionView = new Views.NewQuestion($el, id, _controller);
  }

  window.Controllers = window.Controllers || {};
  window.Controllers.Quiz = QuizController;
})();

