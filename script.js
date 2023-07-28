const apiKey = "e6d03ce5805ff0cbc7cca74132801401";  // OpenWeatherMap API key 
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="; //API endpoint URL -->
    const searchBox = document.querySelector(".search input"); // reference to input field for city name -->
    const searchBtn = document.querySelector(".search button");  // reference to button for submitting city name -->
    const weatherIcon = document.querySelector(".weather-icon"); // reference to weather icon image -->
    async function checkWeather(city){  //function to retrieve weather information from API -->
        const response =await fetch(apiUrl + city + `&appid=${apiKey}`);  // make API request for weather data -->

        if(response.status == 404){   // if the city name entered is invalid -->
            document.querySelector(".error").style.display = "block"; // display error message -->
            document.querySelector(".weather").style.display = "none"; // hide weather information -->
        } else{
            var data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";
        document.querySelector(".realfeel").innerHTML = Math.round(data.main.feels_like) + "°c";
        document.querySelector(".pressure").innerHTML = data.main.pressure + " hPa";
    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "clouds.png";
    }
    else if(data.weather[0].main == "Clear") {
        weatherIcon.src = "clear.png";
    }
    else if(data.weather[0].main == "Rain") {
        weatherIcon.src = "rain.png";
    }
    else if(data.weather[0].main == "Drizzle") {
        weatherIcon.src = "drizzle.png";
    }
    else if(data.weather[0].main == "Mist") {
        weatherIcon.src = "mist.png";
    }
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
        }
        searchBox.value = "";
}
searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})
