let position= {
        lat: -45 ,
        lon: 112
};
fetch("https://api.openweathermap.org/data/2.5/weather?q=sicklerville&appid=5c1ecc9134e7903eacaef455960bdc82&units=imperial").then(response => response.json()).then(data => {
        console.log(data);
 });

// fetch("https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude=minutely,hourly,daily,alets&appid=5c1ecc9134e7903eacaef455960bdc82", {
// }).then(response => response.json()).then(data => {
//     console.log(data);
// })