import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  weatherContainer: {
    flex: 1,
  },
  headerContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  tempText: {
    fontSize: 100,
    color: "#ffffff",
  },
  bodyContainer: {
    flex: 2,
    alignItems: "flex-start",
    justifyContent: "flex-end",
    paddingLeft: 25,
    marginBottom: 40,
  },
  title: {
    fontSize: 70,
    color: "#ffffff",
  },
  description: {
    fontSize: 25,
    color: "#ffffff",
  },
  time: {
    fontSize: 40,
    color: "#ffffff",
  },
  divider: {
    backgroundColor: "#ffffff",
    marginVertical: 20,
  },
});
