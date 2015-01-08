(function() {
  var QuizView = function($el, quizzes, controller) {
    this.element = $el;
    this.quizzes = quizzes;
    this.controller = controller;
    var template = $('.quizzes-template').html();
    var uncompiledTemplate = _.template(template);
    var $html = $(uncompiledTemplate({quizzes: this.quizzes}));
    $el.append($html);

    var _view = this;
    $html.children('.quiz').on('click', function() {
      var id = $(this).data("id");
      _view.destroy();
      // 1. AJAX request to quizzes/5/questions (model)
      // 2. display the page (view)
      var questionsController = new Controllers.Question(_view.element, id);
      questionsController.showFirstQuestion();
    });

    $("#quiz-creation").on("click", "#create-new-quiz", function(e) {
      e.preventDefault();

      var $quizTitle = $("#create-quiz").val();
      _view.controller.createNewQuiz($quizTitle);
      console.log("TEST");
    });
  };

  QuizView.prototype.destroy = function() {
    // clear the element
    // turn off triggers
    this.element.html('');
  }; 

  window.Views = window.Views || {};
  window.Views.Quiz = QuizView;
})();