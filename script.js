const weatherContainerEl = document.querySelector("#weather-container");
const weatherSearchEl = document.querySelector("#city-search-name");
const cityFormEl = document.querySelector("#city-form");
const cityInputEl = document.querySelector("#city");

const formSubmitHandler = function(event) {
    event.preventDefault();
    let cityname = cityInputEl.value.trim();

    if (cityname) {
        getWeather(cityname);
        cityInputEl.value = '';
    } else {
        alert("You need to enter a city");
    }
};

const showCityWeather = function(weather, searchTerm) {
    weatherContainerEl.textContent = "";
    weatherSearchEl.textContent = searchTerm;
    for (var i = 0; i < weather.length; i++) {
        var cityName = weather[i].city.id + "/" + weather[i].name;
        var weather = document.createElement("div");
        weather.classList = "list-item flex-row justify-space-between align-center";
        var weatherEl = document.createElement("span");
        weatherEl.textContent = cityName;
        weather.appendChild(weatherEl);
        weatherContainerEl.appendChild(weather); 
    }
};

const getWeather = function(city) {

    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=54654b2970f4ff24c637b2ecba8f2f9f" 

    fetch(apiUrl).then(function(response) {
        response.json().then(function(data) {
            showCityWeather(data, city);
        });
    });
};

cityFormEl.addEventListener("submit", formSubmitHandler);
