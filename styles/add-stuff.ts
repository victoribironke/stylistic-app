import { StyleSheet, StatusBar } from "react-native";
import { COLORS, FONTS } from "./general";

export const addStuffStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 14,
    marginTop: StatusBar.currentHeight,
    gap: 15,
    alignItems: "center",
  },
  button: {
    backgroundColor: COLORS.blue,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
  },
  buttonText: { fontFamily: FONTS.medium, color: "white", fontSize: 18 },
});
