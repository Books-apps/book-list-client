'use strict';
// Done. Define a global variable called bookView and assign an empty object literal as its value.
var bookView = {};

$('#book-list ul').append(template(book));
Handlebars.compile($('book-template'))

// Done. Enclose your code in an IFFE.
(function(module) {

// Define a method on bookView called initIndexPage which hides any element with a class of container, shows any element with a class of book-view, and maps over the Book instances stored in Book.all to render each and append them to an element with the id of book-list.
app.bookView.initIndexPage = function() {(
  $('.container').hide(),
  $('.container').append(Book.all).getElementbyId('#book-list'),
)}

// Using jQuery's Document.ready functionality, invoke Book.fetchAll when the DOM has loaded, and pass bookView.initIndexPage as it's argument.
Document.ready(e) {
  Book.fetchAll
}
})(bookView)