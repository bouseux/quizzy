(function() {
  var QuestionController = function(viewElement, quizId) {
    this.viewElement = viewElement; 
    this.quizId = quizId; 
    this.count = 0; 
    this.score = 0; 
  }

  QuestionController.prototype.showFirstQuestion = function() {
    var _controller = this;
    Models.Question.fetch(this.quizId, function(questions) {
      _controller.questions = questions;
      var firstQuestion = questions[_controller.count]; 
      var questionView = new Views.Question(_controller.viewElement, firstQuestion, _controller); 
    });
  };

  QuestionController.prototype.showNextQuestion = function() {
    _controller = this; 
    setTimeout(function() {
      _controller.count++; 
      var questions = _controller.questions;
      var nextQuestion = questions[_controller.count]; 
      var questionView = new Views.Question(_controller.viewElement, nextQuestion, _controller); 
    }, 1000);

    if (this.count === this.questions.length-1) {
      alert("You've scored " + this.score + "/" + this.questions.length + " on this quiz!");
      $("#quizzes-display").empty();
      var controller = new Controllers.Quiz($("#quizzes-display"));
      controller.showQuizzes();
    }
  };


  window.Controllers = window.Controllers || {};
  window.Controllers.Question = QuestionController;
})();
