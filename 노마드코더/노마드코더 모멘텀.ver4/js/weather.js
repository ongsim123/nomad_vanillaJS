const weather = document.querySelector(".js-weather");
const weather_APIKEY = 'a29330578bcf98729c5600d4c7b3c213';

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
        weather.innerText = `온도 :${TEMP}℃ || 장소 :${PLACE}`;
    });
}

function savePosition(coords){
    localStorage.setItem("location",JSON.stringify(coords));
}

function handleGeoSuccess(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const coords = {lat,lon};
    savePosition(coords);   
    useWeather_API(lat,lon);
}

function handleGeoError(){
    alert("날씨 및 위치 정보를 얻고 싶으면, 새로고침 후 허용을 누르세요.");
}


function askLocation(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess,handleGeoError);
}

function loadWeather(){
    const currentCoords = localStorage.getItem("location");
    if(currentCoords===null)
    {
        askLocation();
    }
    else
    {
        const parseCoords = JSON.parse(currentCoords);
        useWeather_API(parseCoords.latitude,parseCoords.longitude);
    }
}

function init(){
    loadWeather();
}
init();