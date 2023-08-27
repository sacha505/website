import React from 'react';
import ReactDOM from 'react-dom';


$(window).scroll(function() {
    var scroll = $(window).scrollTop();
  
    if (scroll >= 500) {
      $(".menu").addClass("transparent");
    } else {
      $(".menu").removeClass("transparent");
    }
  });


  