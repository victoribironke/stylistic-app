import { StyleSheet, StatusBar } from "react-native";
import { COLORS, FONTS } from "./general";

export const addStuffStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 14,
    marginTop: StatusBar.currentHeight,
    gap: 24,
  },
});
