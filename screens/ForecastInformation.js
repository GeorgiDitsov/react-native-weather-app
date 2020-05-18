import React from "react";
import { View, Text, FlatList, TextInput, Button } from "react-native";
import ForecastCard from "../components/ForecastCard";
import {
  fetchForecastforCurrentLocation,
  fetchForecastForCity,
} from "../service/weatherService";

export default class ForecastInformation extends React.Component {
  state = {
    location: undefined,
    forecast: [],
    error: undefined,
    isLoading: true,
  };

  componentDidMount() {
    !this.state.location && this.getForecastForCurrentLocation();
  }

  getForecastForCurrentLocation() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        fetchForecastforCurrentLocation(
          position.coords.latitude,
          position.coords.longitude
        ).then((data) => {
          this.setState({
            location: data.city.name,
            forecast: data,
            isLoading: false,
          });
        });
      },
      (error) => this.setState({ error: error.message })
    );
  }

  getForecastForCity() {
    fetchForecastForCity(this.state.location).then((data) => {
      this.setState({
        forecast: data,
        isLoading: false,
      });
    });
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
        }}
      >
        {this.state.isLoading ? (
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
          <View style={{ flex: 1 }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                height: 50,
              }}
            >
              <TextInput
                style={{
                  height: 100,
                  width: 250,
                  color: "#000000",
                  fontSize: 30,
                }}
                value={this.state.location}
                onChangeText={(location) => this.setState({ location })}
                multiline
              />
              <Button
                title="Search"
                onPress={() => this.getForecastForCity()}
              />
              <Button
                title="Current Location"
                onPress={() => this.getForecastForCurrentLocation()}
              />
            </View>
            <FlatList
              data={this.state.forecast.list}
              style={{ marginTop: 20 }}
              keyExtractor={(item) => item.dt_txt}
              renderItem={({ item }) => (
                <ForecastCard
                  detail={item}
                  location={this.state.forecast.city.name}
                />
              )}
            />
          </View>
        )}
      </View>
    );
  }
}
