(function() {
  var QuizView = function($el, quizzes) {
    this.element = $el;
    this.quizzes = quizzes;
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

  };

  QuizView.prototype.destroy = function() {
    // clear the element
    // turn off triggers
  }; 

  window.Views = window.Views || {};
  window.Views.Quiz = QuizView;
})();