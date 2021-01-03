import { API_KEY } from "../utils/weather/weather-api-key";

const BASE_URL = `http://api.openweathermap.org/data/2.5/`;

export const fetchWeatherForCurrentLocation = (latitude, longitude) =>
  fetch(
    `${BASE_URL}weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`
  ).then((response) => response.json());

export const fetchWeatherForCity = (city) =>
  fetch(
    `${BASE_URL}weather?q=${city}&APPID=${API_KEY}&units=metric`
  ).then((response) => response.json());

export const fetchForecastforCurrentLocation = (latitude, longitude) =>
  fetch(
    `${BASE_URL}forecast?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`
  ).then((response) => response.json());

export const fetchForecastForCity = (city) =>
  fetch(
    `${BASE_URL}forecast?q=${city}&APPID=${API_KEY}&units=metric`
  ).then((response) => response.json());
