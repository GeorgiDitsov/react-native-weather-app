import React from "react";
import {
  fetchWeatherForCurrentLocation,
  fetchWeatherForCity,
} from "../service/weatherService";
import LoadingComponent from "../components/LoadingComponent";
import { TextInput, View } from "react-native";
import { weatherConditions } from "../utils/weather/weather-conditions";
import { Button } from "react-native-elements";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ErrorComponent from "../components/ErrorComponent";
import Weather from "../components/Weather";

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
    navigator.geolocation.getCurrentPosition((position) =>
      fetchWeatherForCurrentLocation(
        position.coords.latitude,
        position.coords.longitude
      ).then((data) => {
        if (data.cod == 200) {
          this.setState({
            location: data.name,
            temperature: data.main.temp,
            weatherCondition: data.weather[0],
            error: undefined,
            isLoading: false,
          });
        } else {
          this.setState({ error: data.message, isLoading: false });
        }
      })
    );
  }

  getWeatherForCity() {
    fetchWeatherForCity(this.state.location).then((data) => {
      if (data.cod == 200) {
        this.setState({
          temperature: data.main.temp,
          weatherCondition: data.weather[0],
          error: undefined,
          isLoading: false,
        });
      } else {
        this.setState({ error: data.message, isLoading: false });
      }
    });
  }

  setLocation(location) {
    this.setState({ location });
  }

  render() {
    return this.state.isLoading ? (
      <LoadingComponent />
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
        {this.state.error ? (
          <ErrorComponent message={this.state.error} />
        ) : (
          <Weather
            weather={this.state.weatherCondition}
            temperature={this.state.temperature}
          />
        )}
      </View>
    );
  }
}
