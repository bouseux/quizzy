(function() {
  var newQuizView = function($el, quiz, controller) {
    this.element = $el;
    this.quiz = quiz;
    this.controller = controller;


    var template = $(".quizzes-template").html();
    var uncompiledTemplate = _.template(template);
    var compiledTemplate = uncompiledTemplate({quiz: this.quiz});
    $el.append(compiledTemplate);

    var _view = this;

  };


  window.Views = window.Views || {};
  window.Views.newQuiz = newQuizView;
})();