"use strict";

const debug = true;

let weerButton = document.getElementById('weatherButton');
let weerButton2 = document.getElementById('weatherButton2');
let weatherTickerTape = document.getElementById('weatherTickerTape');
let weatherHere = document.getElementById('weatherHere');
let completeWeatherHere = document.getElementById('completeWeatherHere');

weerButton.addEventListener('click', getWeather);
weerButton2.addEventListener('click', getWeather2);
weatherTickerTape.addEventListener('click', getWeatherTickerTape);

let apiAddress = "http://weerlive.nl/api/json-data-10min.php?key=";
let key = "demo";
let locatie = "&locatie=";
let geoLocation = "Amsterdam";
let url = apiAddress + key + locatie + geoLocation;

function getWeather2(){
  weatherHere.innerHTML = "";
  makeAjaxCall(url, "GET") . then (showWeather2, errorHandler);
}

function getWeather(){
  weatherHere.innerHTML = "";
  makeAjaxCall(url, "GET") . then (showWeather, errorHandler);
}

function getWeatherTickerTape(){
  weatherHere.innerHTML = "";
  makeAjaxCall(url, "GET") . then (showWeatherTickerTape, errorHandler);
}

function showWeather(weatherString) {
  let weatherObject = JSON.parse(weatherString);
  let ditWeer =
   weatherObject.liveweer[0].plaats +
   "<br>Tempertatuur " +
   weatherObject.liveweer[0].temp + "&#176;C" +
   "<br> Verwachting " +
   weatherObject.liveweer[0].samenv +
   "<br> Weerbeeld " +
   weatherObject.liveweer[0].image +
   '<img src="img/' + weatherObject.liveweer[0].image + '.png">'
   weatherHere.innerHTML = ditWeer;
}

function showWeather2(weatherString){
  let weatherObject = JSON.parse(weatherString);
  let completeData = "";
  for (const [key, value] of Object.entries(weatherObject.liveweer[0])) {
    debug ? console.log('${key}: ${value}') : "";
    completeData += key + " : " + value + "<br>";
    weatherHere.innerHTML = completeData;
  }
}

function showWeatherTickerTape(weatherString){
  let weatherObject = JSON.parse(weatherString);

  let weatherArray = [
  weatherObject.liveweer[0].plaats + " - " +
  weatherObject.liveweer[0].temp + " - " +
  weatherObject.liveweer[0].samenv + " - " +
  '<img class="img" src="img/' + weatherObject.liveweer[0].image + '.png">' + " - "];
  weatherArray.push(" reclame ");
  tickerItem = document.getElementById('ticker__item').innerHTML = weatherArray;
}
