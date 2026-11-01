

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";

ChartJS.register(...registerables);

function App() {
  const [weather, setWeather] = useState(null);
  const [history, setHistory] = useState([]);

  const key = "aa66eef8433cc84197213ad13c3c9173";
  const city = "Hyderabad";

  useEffect(() => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`)
      .then(res => setWeather(res.data))
      .catch(err => console.log(err));

    axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&units=metric`)
      .then(res => setHistory(res.data.list.slice(0, 8)))
      .catch(err => console.log(err));
  }, []);

  const data = {
    labels: history.map(x => x.dt_txt),
    datasets: [{
      label: "Temperature (°C)",
      data: history.map(x => x.main.temp),
      borderWidth: 2
    }]
  };

  return (
    <div>
      <h1>Weather Information</h1>

      {weather && (
        <div>
          <h2>{weather.name}</h2>
          <p>Temperature: {weather.main.temp} °C</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Weather: {weather.weather[0].description}</p>
        </div>
      )}

      <h2>Weather Forecast Graph</h2>
      <Line data={data} />
    </div>
  );
}

export default App;


npm install axios react-js-2 chart.js
npm start