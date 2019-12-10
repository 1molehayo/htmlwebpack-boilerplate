import '../sass/main.scss';
import * as $ from 'jquery';
import 'tether';
import 'popper.js';
import 'bootstrap';

const getToday = () => {
  return new Date().getFullYear();
};

$(document).ready(() => {
  $('#today').html(getToday());
});
