/* Pseudo Code

When someone uses the search button, read the city name inserted by the user

Using that same name, send a request from the weather api
 From the response, get current conditions
 using that same name, send another request to get 5-day forecast from weather api

 Parse the response to display forecast for the next 5 days.

 Save the user's search and display them in the search form








*/
function setupLocation(){
fetch("https://api.openweathermap.org/data/2.5/weather?q=sicklerville&appid=5c1ecc9134e7903eacaef455960bdc82&units=imperial")
.then(response => response.json()).then(data => {
        console.log(data.coord);
 });
 
};

function getData(cityCoord) {

}