(function() {
  var NewQuestionView = function($el, quizId, controller) {
    this.element = $el;
    this.quizId = quizId;
    this.controller = controller;


    var question = $("#question").val();
    var answer = $("#answer").val();
    var choices = $("#choices").val();
    console.log(choices);

    var template = $(".new-question-template").html();
    var uncompiledTemplate = _.template(template);


    var $compiledTemplate = $(uncompiledTemplate({question: question, answer: answer}));


    $("#quizzes-display").html('');
    this.element.append($compiledTemplate);



  };

  window.Views = window.Views || {};
  window.Views.NewQuestion = NewQuestionView;
})();