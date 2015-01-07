(function() {
  var QuestionView = function(viewElement, questions) {
    this.viewElement = viewElement; 
    this.questions = questions; 

    count = 0; 
    score = 0; 
    this.question = questions[count]; 

    var template = $('.quest-template').html();
    var uncompiledTemplate = _.template(template);
    var $compiledTemplate = $(uncompiledTemplate({question: this.question}));
    this.viewElement.append($compiledTemplate);
    var _this = this;

    $compiledTemplate.children(".submission").on("click", function() {
      // Display Next Question
      // Show the score after the quiz is completed
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
      // var newQuestionController = new Controllers.newQuestion(_)

    });
  };


  window.Views = window.Views || {};
  window.Views.Question = QuestionView;
})();