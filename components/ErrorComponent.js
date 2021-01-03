import React from "react";
import { View } from "react-native";
import { errorStyle } from "../styles/error-component-style";
import { Divider, Text } from "react-native-elements";
import { styles } from "../styles/weather-data-style";

const ErrorComponent = ({ message }) => (
  <View style={[errorStyle.errorContainer]}>
    <Text style={[errorStyle.errorHeader]}>Oops!</Text>
    <Divider style={styles.divider} />
    <Text style={[errorStyle.errorMessage]}>{`Something went wrong.
Error message: "${message}"`}</Text>
  </View>
);

export default ErrorComponent;
