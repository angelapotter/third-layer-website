$(document).ready(function() {
  'use strict';
  // highlight active nav tab
  var bodyID = $('body').attr('id');
  $('#'+bodyID+'Tab, body.appsPage #appsTab').addClass('activeTab');
});