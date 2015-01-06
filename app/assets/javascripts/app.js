$(function() {
  $.ajax({
    url: "/quizzes", 
    success: function(data) {
      var $quizDisplay = $('#quizzes-display');
      data.forEach(function(x) {

        var template = $(".my-template").html();
        var uncompiledTemplate = _.template(template);
        var compiledTemplate = uncompiledTemplate({
          content: {
            id: x.id,
            title: x.title
          }
        });

        var $el = $(compiledTemplate);
        $quizDisplay.append($el);

      });
    }
  });
});

$(function() {
  $("#quizzes-display").on("click", ".quiz-title", function(e) {
    var $quizId = $(this).attr('id');
    $.ajax({
      url: "/quizzes/" + $quizId + "/questions", 
      success: function(data) {
        var $questDisplay = $('#questions-display');
        data.forEach(function(x) {
          var template = $(".quest-template").html();
          var uncompiledTemplate = _.template(template);
          var choices = x.choices.split(';');

          var compiledTemplate = uncompiledTemplate({
            content: {
              id: x.id, 
              question: x.question, 
              choices: choices
            }
          });

          var $el = $(compiledTemplate);
          $questDisplay.append($el);

        });
      }
    });
  });
});