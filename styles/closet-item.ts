import { StyleSheet, StatusBar } from "react-native";
import { COLORS, FONTS } from "./general";

export const closetItemStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    marginTop: StatusBar.currentHeight,
    gap: 24,
    alignItems: "center",
  },
  colorsContainer: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  colorsView: { padding: 20, borderRadius: 100 },
  image: { width: "90%", aspectRatio: "1/1", borderRadius: 20 },
  typesView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 15,
  },
  typeText: { fontFamily: FONTS.medium, fontSize: 25 },
  separator: { padding: 5, backgroundColor: "black", borderRadius: 100 },
  subTypeText: { fontFamily: FONTS.regular, fontSize: 25 },
  buttonsView: {
    padding: 4,
    gap: 15,
    flexDirection: "row",
  },
  button: {
    paddingHorizontal: 25,
    paddingVertical: 12,
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontFamily: FONTS.regular,
    fontSize: 20,
  },
});
