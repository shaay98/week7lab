"use strict"

let weather = [
    { day: "Sunday", temperture: 60, rainfall: 0.2},
    { day: "Monday", temperture: 55, rainfall: 0},
    { day: "Tuesday", temperture: 63, rainfall: 0.3},
    { day: "Wednesday", temperture: 57, rainfall: 0.25},
];

let tb = document.getElementById("weather")
weather.forEach(weatherDay => {
   let tr= `<tr>
            <td>${weatherDay.day}</td>
            <td>${weatherDay.temperture}</td>
            <td>${weatherDay.rainfall}</td>
          </tr>`
        tb.innerHTML += tr;
}); 


