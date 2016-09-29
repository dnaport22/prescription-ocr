'use strict';

//Test images
var a = 'resources/para.jpg';
var b = 'resources/ibu.jpeg';

var dataset = require('./data.js');
var config = require('./key.js');
var gcloud = require('gcloud')(config.key());
var vision = gcloud.vision();

function ocr() {
  vision.detectText(a, function(err, text, apiResponse) {
    cleaning(text)
  });
}

function cleaning(ocr_data) {
  for (var i = 0; i < ocr_data.length; i++) {
    var lower_case_data = ocr_data[i].toLowerCase();
    analyse(lower_case_data);
  }
}

function analyse(lower_case_data) {
  for (var i = 0; i < getData().length; i++) {
    if (getData()[i].name == lower_case_data) {
      console.log(getData()[i].ticket);
    }
  }
}

function getData() {
  var schema = dataset;
  return schema;
}
ocr()
