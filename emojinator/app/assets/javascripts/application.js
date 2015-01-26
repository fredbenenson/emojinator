// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require jquery.emojiarea
//= require emojis
//= require_tree .

function validateForm() {
  emoji_text = $('textarea#emoji')[0].value
  email = $('#email')[0].value
  if (emoji_text == "") {
    alert("Please pick some emoji!");
    return false;
  }
  if (email == "") {
    alert("Please enter an email addess!");
    return false;
  }
}

