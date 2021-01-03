import React from "react";
import { Text, View } from "react-native";

const LoadingComponent = () => (
  <View
    style={{
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#ffffff",
    }}
  >
    <Text style={{ fontSize: 30 }}>Loading...</Text>
  </View>
);

export default LoadingComponent;
