'use strict';
$(document).ready(function() {
  let openFareEstimate = $('.btn-estimate');
  openFareEstimate.click(function() {
    window.location.href = 'views/estimate.html';
  });
});