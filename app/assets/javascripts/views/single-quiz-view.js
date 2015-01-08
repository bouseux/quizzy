(function() {
  var SingleQuizView = function($el, controller) {
    this.element = $el;
    this.controller = controller;

    var _view = this;
    $(".quiz-buttons").on("click", ".take-quiz", function(e) {

      var id = $(".take-quiz").data("id");
      var questionsController = new Controllers.Question(_view.element, id);
      questionsController.showFirstQuestion();
    })

  };



  window.Views = window.Views || {};
  window.Views.singleQuiz = SingleQuizView;
})();