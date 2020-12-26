import { API_KEY } from "../utils/weather/weather-api-key";

const BASE_URL = `http://api.openweathermap.org/data/2.5/`;

export const fetchWeatherForCurrentLocation = async (latitude, longitude) => {
  const result = await fetch(
    `${BASE_URL}weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`
  );
  return await result.json();
};

export const fetchWeatherForCity = async (city) => {
  const result = await fetch(
    `${BASE_URL}weather?q=${city}&APPID=${API_KEY}&units=metric`
  );
  return await result.json();
};

export const fetchForecastforCurrentLocation = async (latitude, longitude) => {
  const result = await fetch(
    `${BASE_URL}forecast?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`
  );
  return await result.json();
};

export const fetchForecastForCity = async (city) => {
  const result = await fetch(
    `${BASE_URL}forecast?q=${city}&APPID=${API_KEY}&units=metric`
  );
  return await result.json();
};
