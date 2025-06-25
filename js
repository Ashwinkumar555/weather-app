async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "36ed5e266726c73ae802c22521c4c5c5"; // Replace this with your API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === "404") {
      document.getElementById("result").innerHTML = "City not found!";
    } else {
      document.getElementById("result").innerHTML = `
        <p>🌍 City: ${data.name}</p>
        <p>🌡️ Temp: ${data.main.temp} °C</p>
        <p>☁️ Weather: ${data.weather[0].description}</p>
        <p>💧 Humidity: ${data.main.humidity}%</p>
      `;
    }
  } catch (error) {
    document.getElementById("result").innerHTML = "Error getting weather.";
  }
}
