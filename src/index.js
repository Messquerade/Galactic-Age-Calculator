import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import SolarAge from "./business";

$("#click-me").click(function () {
  let message = SolarAge.earthYears;
  $("h2").text(message);
});