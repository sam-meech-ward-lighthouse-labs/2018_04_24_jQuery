// document.addEventListener("DOMContentLoaded");
// $(document).ready(function() {});
// $(document).on('ready', function() {});

$(function() {
  // When will this get called?


// var $joelEmoji = $("#joel-emoji");


// var joel =  document.querySelector('#joel');
// var $joelEmoji = $(joel);

  // var $header = $("<h1>");
  // $header.text( " Hello 🤗");
  // $header.css({fontSize: 50, color: "blue"});
  // $header.prependTo($("body"));

  $("<h1>")
    .text( " Hello 🤗")
    .css({fontSize: 50, color: "blue"})
    .prependTo($("body"));


    $("form").on("submit", function(event) {
      event.preventDefault();

      var input = $("#emojiTextInput").val();

      $("<li>").text(input).appendTo("#favorites-list");
    });

    $('ol').on("click", "li", function(event) {
      $(this).effect("bounce");
    });

});