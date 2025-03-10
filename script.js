"use strict";

let weather = [
  { day: "Sunday", temperture: 60, rainfall: 0.2 },
  { day: "Monday", temperture: 55, rainfall: 0 },
  { day: "Tuesday", temperture: 63, rainfall: 0.3 },
  { day: "Wednesday", temperture: 57, rainfall: 0.25 },
];

let tb = document.getElementById("weather");
weather.forEach((weatherDay) => {
  let tr = `<tr> 
            <td>${weatherDay.day}</td>
            <td>${weatherDay.temperture}</td>
            <td>${weatherDay.rainfall}</td>
          </tr>`;
  tb.innerHTML += tr;
});

let tempTotal = 0;
let days = weather.length;

weather.forEach((day) => {
  tempTotal += day.temperture;
});
tempTotal = tempTotal / days;
document.getElementById("temp").addEventListener("click", () => {
  document.getElementById("averageTemp").innerText = tempTotal;
});

let maxRain = weather.reduce((max, day) => {
  if (day.rainfall > max) {
    max = day.rainfall;
  } else if (day.rainfall <= max) {
  }
  return max;
}, 0);

document.getElementById("rain").addEventListener("click", () => {
  document.getElementById("maxRain").innerHTML = maxRain;
});
