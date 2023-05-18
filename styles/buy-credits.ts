import { StyleSheet, StatusBar } from "react-native";
import { COLORS, FONTS } from "./general";

export const buyCreditsStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    marginTop: StatusBar.currentHeight,
    gap: 24,
  },
  otherHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  otherHeaderText: { fontFamily: FONTS.medium, fontSize: 22 },
  categoriesView: {
    gap: 15,
  },
  categoryView: {
    borderWidth: 2,
    borderColor: COLORS.deepOrange,
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  leftCategory: {
    gap: 10,
  },
  creditQuantity: {
    fontSize: 22,
    fontFamily: FONTS.medium,
  },
  creditCost: {
    fontSize: 19,
    fontFamily: FONTS.regular,
  },
  selector: {
    width: 25,
    height: 25,
    borderWidth: 3,
    borderColor: COLORS.deepOrange,
    padding: 4,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  buyButton: {
    backgroundColor: COLORS.deepOrange,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
    borderRadius: 8,
  },
  buyButtonText: {
    fontFamily: FONTS.medium,
    fontSize: 21,
    color: "white",
  },
});
