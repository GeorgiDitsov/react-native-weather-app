import React from "react";
import { View, Text } from "react-native";
import { styles } from "../styles/weather-data-style";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { weatherConditions } from "../utils/weather/weather-conditions";
import PropTypes from "prop-types";

const Weather = ({ weather, temperature }) =>
  weather ? (
    <View style={[styles.weatherContainer]}>
      <View style={styles.headerContainer}>
        <MaterialCommunityIcons
          size={100}
          name={weatherConditions[weather.main].icon.name}
          color={weatherConditions[weather.main].icon.color}
        />
        <Text style={styles.tempText}>{Math.round(temperature)}˚</Text>
      </View>
      <View style={styles.bodyContainer}>
        <Text style={styles.title}>{weather.main}</Text>
        <Text style={styles.description}>{weather.description}</Text>
      </View>
    </View>
  ) : (
    <View>
      <Text>Oops, something went wrong</Text>
    </View>
  );

Weather.propTypes = {
  temperature: PropTypes.number.isRequired,
  weather: PropTypes.object.isRequired,
};

export default Weather;
