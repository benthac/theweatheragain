const getWeather = function(city) {

    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=54654b2970f4ff24c637b2ecba8f2f9f" 

    fetch(apiUrl).then(function(response) {
        response.json().then(function(data) {
            console.log(data);
        });
    });
};

getWeather("tulsa");