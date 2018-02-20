'use strict';
$(document).ready(function() {
  var openFareEstimate = $('.btn-estimate');
  openFareEstimate.click(function() {
    window.location.href = 'views/estimate.html';
  });
});