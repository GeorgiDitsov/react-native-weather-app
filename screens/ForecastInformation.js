import React from "react";
import { FlatList, TextInput, View } from "react-native";
import { Button } from "react-native-elements";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ForecastCard from "../components/ForecastCard";
import {
  fetchForecastforCurrentLocation,
  fetchForecastForCity,
} from "../service/weatherService";
import ErrorComponent from "../components/ErrorComponent";
import LoadingComponent from "../components/LoadingComponent";

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
    navigator.geolocation.getCurrentPosition((position) =>
      fetchForecastforCurrentLocation(
        position.coords.latitude,
        position.coords.longitude
      ).then((data) => {
        if (data.cod == 200) {
          this.setState({
            location: data.city.name,
            forecast: data,
            error: undefined,
            isLoading: false,
          });
        } else {
          this.setState({ error: data.message, isLoading: false });
        }
      })
    );
  }

  getForecastForCity() {
    fetchForecastForCity(this.state.location).then((data) => {
      if (data.cod == 200) {
        this.setState({
          forecast: data,
          error: undefined,
          isLoading: false,
        });
      } else {
        this.setState({ error: data.message, isLoading: false });
      }
    });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        {this.state.isLoading ? (
          <LoadingComponent />
        ) : (
          <View style={{ flex: 1 }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                height: 60,
              }}
            >
              <TextInput
                style={{ height: 90, width: 200, color: "black", fontSize: 30 }}
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
                onPress={() => this.getForecastForCity()}
              />
              <Button
                icon={
                  <MaterialCommunityIcons
                    size={30}
                    name="crosshairs-gps"
                    color="white"
                  />
                }
                onPress={() => this.getForecastForCurrentLocation()}
              />
            </View>
            {this.state.error ? (
              <ErrorComponent message={this.state.error} />
            ) : (
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
            )}
          </View>
        )}
      </View>
    );
  }
}
