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
    var _controller = this; 

    if (_controller.count === _controller.questions.length-1) {
      setTimeout(function() {
        alert("You've scored " + _controller.score + "/" + _controller.questions.length + " on this quiz!");
        $("#quizzes-display").empty();
        var controller = new Controllers.Quiz($("#quizzes-display"));
        controller.showQuizzes();
        
      }, 1000);
    }
    else {
      setTimeout(function() {
        _controller.count++; 
        var questions = _controller.questions;
        var nextQuestion = questions[_controller.count]; 
        var questionView = new Views.Question(_controller.viewElement, nextQuestion, _controller); 
      }, 1000);
    }
  };


  QuestionController.prototype.createQuestion = function(quizId, question, answer, choices) {
    var $el = this.viewElement;
    var _controller = this;
    Models.Question.create(quizId, question, answer, choices, function(newQuestion) {
      var newQuestionView = new Views.NewQuestion($el, newQuestion, _controller);
    });
  };


  window.Controllers = window.Controllers || {};
  window.Controllers.Question = QuestionController;
})();
