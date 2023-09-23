async function check(){
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?APPID=1c3586d354901815e8a24a312dc90e29&units=metric&q=visakhapatnam');
    var data = await response.json();
    
    console.log(data);

let disc = document.querySelector('.disc');
let deg = document.querySelector('.deg');
let feels = document.querySelector('.feels');

let humid = document.querySelector('.humid .val');
let wind =document.querySelector('.wind .val');

disc.innerHTML = data.weather[0].description;
deg.innerHTML = Math.round(data.main.temp) + '°C';
feels.innerHTML = Math.round(data.main.feels_like) + '°C';

humid.innerHTML = data.main.humidity+'%';
wind.innerHTML = data.wind.speed+' km/h';

let wicon =document.querySelector('.weathericon');
if(data.weather[0].main === 'Rain'){
wicon.innerHTML = '<img src="images/rain.png" width="100px">'
}
else if(data.weather[0].main === 'Clouds'){
    wicon.innerHTML = '<img src="images/clouds.png" width="100px">';
}
else if(data.weather[0].main === 'Drizzle'){
    wicon.innerHTML = '<img src="images/drizzle.png" width="100px">';
}
else if(data.weather[0].main === 'Mist'){
    wicon.innerHTML = '<img src="images/mist.png" width="100px">';
}
else if(data.weather[0].main === 'Snow'){
    wicon.innerHTML = '<img src="images/snow.png" width="100px">';
}
else if(data.weather[0].main === 'Clear'){
    wicon.innerHTML = '<img src="images/clear.png" width="100px">';
}
else if(data.weather[0].main === 'Haze'){
    wicon.innerHTML = '<img style="width:4rem;" src="images/fog.png">';
}
console.log(wicon);
}
check();