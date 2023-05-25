import { StyleSheet, StatusBar } from "react-native";

export const suggestionStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 14,
    marginTop: StatusBar.currentHeight,
    gap: 24,
  },
});
