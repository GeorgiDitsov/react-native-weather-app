import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Home from "./screens/Home";
import ForecastInformation from "./screens/ForecastInformation";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
          component={Home}
        />
        <Tab.Screen
          name="Forecast"
          options={{
            tabBarLabel: "Forecast",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="weather-partly-cloudy"
                color={color}
                size={size}
              />
            ),
          }}
          component={ForecastInformation}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
