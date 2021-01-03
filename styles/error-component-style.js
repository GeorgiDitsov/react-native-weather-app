import { StyleSheet } from "react-native";

export const errorStyle = StyleSheet.create({
  errorContainer: {
    flex: 1,
    backgroundColor: "#d30000",
    justifyContent: "center",
    paddingHorizontal: 50,
  },
  errorHeader: {
    fontSize: 75,
    color: "#ffffff",
  },
  errorMessage: {
    fontSize: 25,
    color: "#ffffff",
  },
});
