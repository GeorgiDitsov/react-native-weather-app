import React from "react";
import {
  fetchWeatherForCurrentLocation,
  fetchWeatherForCity,
} from "../service/weatherService";
import { View, Text, TextInput } from "react-native";
import { Button } from "react-native-elements";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Weather from "../components/Weather";
import { weatherConditions } from "../utils/weather/weather-conditions";

export default class Home extends React.Component {
  state = {
    location: undefined,
    tempreture: 0,
    weatherCondition: undefined,
    error: undefined,
    isLoading: true,
  };

  componentDidMount() {
    !this.state.location && this.getWeatherForCurrentLocation();
  }

  getWeatherForCurrentLocation() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        fetchWeatherForCurrentLocation(
          position.coords.latitude,
          position.coords.longitude
        ).then((weatherInfo) => {
          console.log(weatherInfo);
          this.setState({
            location: weatherInfo.name,
            temperature: weatherInfo.main.temp,
            weatherCondition: weatherInfo.weather[0],
            isLoading: false,
          });
        });
      },
      (error) => this.setState({ error: error.message })
    );
  }

  getWeatherForCity() {
    fetchWeatherForCity(this.state.location).then((weatherInfo) => {
      this.setState({
        temperature: weatherInfo.main.temp,
        weatherCondition: weatherInfo.weather[0],
        isLoading: false,
      });
    });
  }

  render() {
    return this.state.isLoading ? (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#ffffff",
        }}
      >
        <Text style={{ fontSize: 30 }}>Loading</Text>
      </View>
    ) : (
      <View
        style={{
          flex: 1,
          backgroundColor:
            weatherConditions[this.state.weatherCondition.main].backgroundColor,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            height: 60,
          }}
        >
          <TextInput
            style={{ height: 90, width: 200, color: "white", fontSize: 30 }}
            value={this.state.location}
            onChangeText={(location) => this.setState({ location })}
            multiline
          />
          <Button
            icon={
              <MaterialCommunityIcons
                size={30}
                name="map-search"
                color="white"
              />
            }
            onPress={() => this.getWeatherForCity()}
          />
          <Button
            icon={
              <MaterialCommunityIcons
                size={30}
                name="crosshairs-gps"
                color="white"
              />
            }
            onPress={() => this.getWeatherForCurrentLocation()}
          />
        </View>
        <Weather
          weather={this.state.weatherCondition}
          temperature={this.state.temperature}
        />
      </View>
    );
  }
}
