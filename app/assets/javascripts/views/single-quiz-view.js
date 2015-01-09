(function() {
  var SingleQuizView = function($el, controller) {
    this.element = $el;
    this.controller = controller;

    var _view = this;
    $(".quiz-buttons").on("click", ".take-quiz", function(e) {

      var id = $(".quiz-buttons").data("id");
      var questionsController = new Controllers.Question(_view.element, id);
      questionsController.showFirstQuestion();
    });

    $(".quiz-buttons").on("click", ".add-question", function(e) {

      var id = $(".quiz-buttons").data("id");

      _view.controller.newQuestion(id);

    });
  };


  window.Views = window.Views || {};
  window.Views.SingleQuiz = SingleQuizView;
})();