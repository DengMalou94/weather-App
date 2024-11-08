const fetchWeatherData = async() => {
    const city = document.getElementById('city').value;
    const apiKey = '9bd5351d88ef53e84bbc90c1f1e9ed86';
    const fetchWeatherData =document.getElementById('weatherData');
    try{
        //fetch weather data from openweather API
        const response  = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        // Checking if the response is okay
        if(!response.ok) throw new Error('City not found. Please enter a valid city');
        const data = await response.json();
        const humidity = data.main.humidity;
        const windSpeed = data.wind.speed;
        const icon = data.weather[0].icon;
        const condition = data.weather[0].description;

        // Display the weather data
        fetchWeatherData.innerHTML =`
        <h2>${data.name}</h2>
        <img src="http://openweathermap.org/img/wn/${icon}@2x.png" alt="${condition}">
        <p><strong>Temperature:</strong> ${data.main.temp}°C </p>
        <p><strong>Condition:</strong> ${data.weather[0].description}</p>
        <p><strong>WindSpeed:</strong> ${windSpeed}m/s</p>
        <p><strong>Humidity:</strong> ${humidity}%</p>`;
        // Make the weather data container visible 
        fetchWeatherData.style.display = 'block';
    }
    catch(error){
        fetchWeatherData.innerHTML= `<p style = "color:red;"> Error: ${error.message}</p>`
        fetchWeatherData.style.display = 'block'; // Display an error message if there's an issue
    }
};
