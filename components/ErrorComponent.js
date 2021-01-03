import React from "react";
import { Text, View } from "react-native";
import { errorStyle } from "../styles/error-component-style";
import { Divider } from "react-native-elements";
import { styles } from "../styles/weather-data-style";
import PropTypes from "prop-types";

const ErrorComponent = ({ message }) => (
  <View style={[errorStyle.errorContainer]}>
    <Text style={[errorStyle.errorHeader]}>Oops!</Text>
    <Divider style={styles.divider} />
    <Text style={[errorStyle.errorMessage]}>{`Something went wrong.
Error message: "${message}"`}</Text>
  </View>
);

ErrorComponent.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ErrorComponent;
