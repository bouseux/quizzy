(function() {
  var QuestionController = function(viewElement, quizId) {
    this.viewElement = viewElement; 
    this.quizId = quizId; 
  }

  QuestionController.prototype.showFirstQuestion = function() {
    _view = this;
    Models.Question.fetch(this.quizId, function(questions) {
      var questionView = new Views.Question(_view.viewElement, questions);
    });
  };

  window.Controllers = window.Controllers || {};
  window.Controllers.Question = QuestionController;
})();
