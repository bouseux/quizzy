// Question view takes in array of questions. Force next question controller to pass in an array
// Question view takes in single question. force question-controller to pass in a single question
// Create separate views for each scenario
(function() {
  var QuestionView = function(viewElement, questions, controller) {
    this.viewElement = viewElement; 
    this.questions = questions;
    this.controller = controller;
    
    var count = 0; 
    var score = 0;  

    this.question = questions[count];

    var template = $('.quest-template').html();
    var uncompiledTemplate = _.template(template);
    var $compiledTemplate = $(uncompiledTemplate({question: this.question}));
    this.viewElement.append($compiledTemplate);
    var _this = this;

    $compiledTemplate.children(".submission").on("click", function() {

      var score = 0;
      var guess = $(".ans-content").val();

      var answer = _this.question.answer;

      if (guess === answer) {
        $("#quizzes-display").append("<p class='correctness'>Correct!</p>");
      }
      else {
        $("#quizzes-display").append("<p class='correctness'>Incorrect!</p>");
      }

      setTimeout(function() {
        $('.correctness').remove();
      }, 1000);

      count += 1;
      _this.controller.showNextQuestion();

    });
  };


  window.Views = window.Views || {};
  window.Views.Question = QuestionView;
})();