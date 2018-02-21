'use strict';
var btnRoute = document.getElementById('trace-route');
var cardPrices = $('.card-prices');
// Uber API Constants
var idClientUber = 'FR06ko4MQfwsC1vx_uSdQ7pw7tk8QsC7';
var tokenServerUber = 'Y-Ih1n9juuYgi5rKwaZ8f8bFyIhE-J3gFA7rPFFe';
// Create variables to store latitude and longitude
var starLatitude;
var starLongitude;
var endLatitude;
var endLongitude;

function getEstimatesForUserLocation(latitudeOrigin, longitudeOrigin, latitudeDestiny, longitudeDestiny) {
  var proxy = 'https://cors-anywhere.herokuapp.com/';
  var apiUber = 'https://api.uber.com/v1/estimates/price';

  $.ajax({
    url: proxy + apiUber,
    headers: {
      Authorization: 'Token' + tokenServerUber
    },
    data: {
      startLatitude: latitudeOrigin,
      startLongitude: longitudeOrigin,
      endLatitude: latitudeDestiny,
      endLongitude: longitudeDestiny
    },
    success: function (result) {
      console.log(result);
      /* Resultado de los prices */
      result.prices.forEach(function (element) {

        let template;
        template = `<div class="row prices-element">
                               <div class="col-6"><p>${element.localized_display_name}</p></div>
                               <div class="col-6"><p>${element.estimate}</p></div>
                             </div>`;
        cardPrices.prepend(template);
      });
    }
  });
};