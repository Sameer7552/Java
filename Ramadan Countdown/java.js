
var RamadanDate = new Date("March 10, 2024 00:00:00 GMT+0000").getTime();

var x = setInterval(function() {

  var date = new Date().getTime();

  var distance = RamadanDate - date;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  
  document.getElementById("hours").innerHTML = hours ;
  
  document.getElementById("min").innerHTML = minutes;
  
  document.getElementById("sec").innerHTML =seconds;

}, 1000);
