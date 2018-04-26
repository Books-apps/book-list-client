'use strict'

// Define a global variable called error-view and assign an empty object literal as it's value.
errorView = {};

// Error 404

(function(module) {

  // Define a method on errorView called initErrorPage which takes an argument of err and does the following:
  errorView.initErrorPage(err){

    // Hides any element with a class of container (or the class you chose to use).
    $('.container').hides();

    // Shows any element with a class of error-view (or the class you chose to use).
    $('#error-view').shows();

    // Empties any content within the element with an id of error-message (or the id you chose to use).
    $('#error-message').hide();

    // Compiles the Handlebars template with an id of error-template.
    Handlebars.compile($('error-template'));

    // Renders the err argument into the template, and appends it to an element with an id of error-message.
    $(err).append('#error-message')
  }

  function errorCallback() {
    // Log the error and pass the error to the errorView.initErrorPage view method.
    errorView.initErrorPage();
  }

)}(app)