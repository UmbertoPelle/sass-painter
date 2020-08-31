var $ = require( "jquery" );

function openMenu() {
  var menu = $('.fas.fa-bars.hamburger_dropdown_parent');

  menu.click(function () {
    if ($(".hamburger_dropdown").hasClass('open')) {
      $(".hamburger_dropdown").removeClass('open');
      $(".hamburger_dropdown").slideUp();
    }else {
      $(".hamburger_dropdown").slideDown();
      $(".hamburger_dropdown").addClass('open');
    }

  });
}


function init() {
  openMenu();
}

$(document).ready(init);
