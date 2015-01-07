(function() {
  var QuestionView = function(viewElement, questions) {
    this.viewElement = viewElement; 
    this.questions = questions; 

    var template = $('.quest-template').html();
    var uncompiledTemplate = _.template(template);
    var $compiledTemplate = $(uncompiledTemplate({questions: this.questions}));
    this.viewElement.append($compiledTemplate);
  };


  window.Views = window.Views || {};
  window.Views.Question = QuestionView;
})();