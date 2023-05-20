import { StyleSheet, StatusBar } from "react-native";
import { COLORS, FONTS } from "./general";

export const accountStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 14,
    marginTop: StatusBar.currentHeight,
    gap: 24,
  },
  detailsView: {
    gap: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  textView: {
    gap: 5,
  },
  nameText: {
    fontFamily: FONTS.medium,
    fontSize: 20,
  },
  emailText: {
    fontFamily: FONTS.regular,
    fontSize: 16,
  },
  editText: { fontFamily: FONTS.regular, lineHeight: 18, color: COLORS.grey },
  recSettings: {
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  save: {
    backgroundColor: COLORS.deepOrange,
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  saveText: {
    fontSize: 18,
    fontFamily: FONTS.regular,
    color: "white",
  },
});
