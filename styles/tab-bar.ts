import { StyleSheet } from "react-native";
import { FONTS } from "./general";

export const tabBarStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 8,
    paddingVertical: 15,
    alignItems: "center",
    justifyContent: "space-between",
    // gap: 10,
  },
  item: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
  },
  text: {
    fontFamily: FONTS.regular,
  },
});
