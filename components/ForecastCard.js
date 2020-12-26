import React from "react";
import { Card, Divider, Text } from "react-native-elements";
import { weatherConditions } from "../utils/weather/weather-conditions";
import { styles } from "../styles/weather-data-style";
import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import PropTypes from "prop-types";

const ForecastCard = ({ detail, location }) => {
  let time;
  var date = new Date(detail.dt * 1000);
  var hours = date.getHours();
  var minutes = "0" + date.getMinutes();
  time = hours + ":" + minutes.substr(-2);

  return (
    <Card
      containerStyle={{
        backgroundColor:
          weatherConditions[detail.weather[0].main].backgroundColor,
        borderRadius: 30,
      }}
    >
      <Text style={styles.description}>{location}</Text>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <MaterialCommunityIcons
          size={50}
          name={weatherConditions[detail.weather[0].main].icon.name}
          color={weatherConditions[detail.weather[0].main].icon.color}
        />
        <Text style={styles.time}>{time}</Text>
      </View>
      <Divider style={styles.divider} />
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={styles.description}>{detail.weather[0].main}</Text>
        <Text style={styles.description}>{detail.weather[0].description}</Text>
        <Text style={styles.description}>{Math.round(detail.main.temp)}˚</Text>
      </View>
    </Card>
  );
};

ForecastCard.propTypes = {
  detail: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default ForecastCard;
