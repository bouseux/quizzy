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

      $div = $("<div class='quiz-buttons'/>");
      $quizButton = $("<button/>");
      $questionButton = $("<button/>");
      $quizButton.addClass("take-quiz");
      $quizButton.html("Take Quiz");
      $quizButton.data("id", id);
      $questionButton.addClass("add-question");
      $questionButton.html("Add Question");
      $questionButton.data("id", id);
      $div.append($quizButton);
      $div.append($questionButton); 
      $el.append($div);  
      _view.controller.quizIntermediary();

    });

    $("#quiz-creation").on("click", "#create-new-quiz", function() {

      var $quizTitle = $("#create-quiz").val();
      _view.controller.createNewQuiz($quizTitle);
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