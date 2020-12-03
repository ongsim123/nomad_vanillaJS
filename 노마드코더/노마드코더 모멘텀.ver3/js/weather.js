const weather = document.querySelector(".js-weather");
const weather_APIKEY = 'a29330578bcf98729c5600d4c7b3c213';
const currentLocation = 'location';

function useWeather_API(lat,lon){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${weather_APIKEY}&units=metric`)
    .then(function(response)
    {
        return response.json();
    })
    .then(function(json)
    {
        const TEMP = json.main.temp;
        const PLACE = json.name;
        weather.innerText = `온도 :${TEMP}℃ 
                             장소 :${PLACE}`;
    });
}

function saveLocation(COORDS){
    localStorage.setItem(currentLocation,JSON.stringify(COORDS));
}

function locationError(){
    alert("If you want to see yout location, Please Check Your Location !");
}

function locationSuccess(LOCATION){
    const latitude = LOCATION.coords.latitude;
    const longitude = LOCATION.coords.longitude;
    const COORDS = {latitude,longitude};//=>latitude:latitude,longitude:longitude};객체의 key와 value가 같으면 앞선 방식으로 표현 가능
saveLocation(COORDS);
useWeather_API(latitude,longitude);
}

function askLocation(){
    navigator.geolocation.getCurrentPosition(locationSuccess,locationError);
}

function loadWeather(){
    const currentWeather = localStorage.getItem(currentLocation);
    if(currentWeather === null)
    {
        askLocation();
    }
    else
    {
        const parseCOORDS = JSON.parse(currentWeather);
        useWeather_API(parseCOORDS.latitude , parseCOORDS.longitude);
    }
}

function init(){
    loadWeather();
}
init();