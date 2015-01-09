(function() {
  var NewQuizView = function($el, quiz, controller) {
    this.element = $el;
    this.quiz = quiz;
    this.controller = controller;


    var template = $(".quizzes-template").html();
    var uncompiledTemplate = _.template(template);
    var compiledTemplate = uncompiledTemplate({quiz: this.quiz});
    $el.append(compiledTemplate);


  };


  window.Views = window.Views || {};
  window.Views.NewQuiz = NewQuizView;
})();