const apiKey = '9bd5351d88ef53e84bbc90c1f1e9ed86'; 

async function getWeather() {
    const city = document.getElementById('cityInput').value;

    if (city === "") {
        document.getElementById('weather').innerHTML = "<p>Please enter a city name.</p>";
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('City not found');
        }

        const data = await response.json();
        const temp = data.main.temp;
        const weatherDesc = data.weather[0].description;
        const humidity = data.main.humidity;
        const windSpeed = data.wind.speed;
        const icon = data.weather[0].icon;

        const weatherHTML = `
            <h2>${data.name}</h2>
            <img src="http://openweathermap.org/img/wn/${icon}@2x.png" alt="${weatherDesc}">
            <p><strong>Temperature:</strong> ${temp}°C</p>
            <p><strong>Weather:</strong> ${weatherDesc}</p>
            <p><strong>Humidity:</strong> ${humidity}%</p>
            <p><strong>Wind Speed:</strong> ${windSpeed} m/s</p>
        `;

        document.getElementById('weather').innerHTML = weatherHTML;
    } catch (error) {
        document.getElementById('weather').innerHTML = `<p>Error: ${error.message}</p>`;
    }
}
