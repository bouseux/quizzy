(function() {
  var QuestionController = function(viewElement, quizId) {
    this.viewElement = viewElement; 
    this.quizId = quizId; 
  }

  QuestionController.prototype.showFirstQuestion = function() {
    var _controller = this;
    Models.Question.fetch(this.quizId, function(questions) {
      _controller.questions = questions;
      var questionView = new Views.Question(_controller.viewElement, questions, _controller); 
    });
  };

  QuestionController.prototype.showNextQuestion = function() {
    
  };

  window.Controllers = window.Controllers || {};
  window.Controllers.Question = QuestionController;
})();
