// Question view takes in array of questions. Force next question controller to pass in an array
// Question view takes in single question. force question-controller to pass in a single question
// Create separate views for each scenario
(function() {
  var QuestionView = function(viewElement, question, controller) {
    this.viewElement = viewElement; 
    this.question = question; 
    this.controller = controller;

    var template = $('.quest-template').html();
    var uncompiledTemplate = _.template(template);
    var $compiledTemplate = $(uncompiledTemplate({question: this.question}));
    $("#quizzes-display").html('');
    this.viewElement.append($compiledTemplate);
    var _view = this;

    $compiledTemplate.children(".submission").on("click", function() {

      var guess = $(".ans-content").val();
      var answer = _view.question.answer;

      if (guess === answer) {
        $("#quizzes-display").append("<p class='correctness'>Correct!</p>");
        _view.controller.score += 1;
      }
      else {
        $("#quizzes-display").append("<p class='correctness'>Incorrect!</p>");
      }

      setTimeout(function() {
        $('.correctness').remove();
      }, 1000);

      _view.controller.showNextQuestion();

    });
  };


  window.Views = window.Views || {};
  window.Views.Question = QuestionView;
})();