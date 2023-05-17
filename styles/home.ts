import { StatusBar, StyleSheet } from "react-native";
import { COLORS } from "./colors";

export const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: "gt-regular",
    padding: 12,
    marginTop: StatusBar.currentHeight,
    gap: 24,
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  leftHeader: {
    flex: 1,
    gap: 2,
  },
  welcomeText: {
    fontFamily: "gt-regular",
    fontSize: 18,
  },
  nameText: {
    fontFamily: "gt-medium",
    fontSize: 20,
  },
  profileView: {},
  profileImage: {
    width: 35,
    height: 35,
  },
  creditContainer: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  credits: {
    flex: 1,
    gap: 2,
  },
  creditAmount: {
    fontFamily: "gt-medium",
    fontSize: 30,
  },
  creditText: {
    fontFamily: "gt-regular",
    fontSize: 16,
  },
  buyCredits: {
    backgroundColor: COLORS.deepOrange,
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  buyCreditsText: {
    fontSize: 18,
    fontFamily: "gt-regular",
    color: "white",
  },
  closetView: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
  },
  itemsText: {
    fontFamily: "gt-medium",
    fontSize: 23,
  },
  closetContainer: {
    flexDirection: "column",
    alignItems: "center",
    gap: 20,
    justifyContent: "center",
  },
  filterView: {
    borderRadius: 8,
    paddingLeft: 10,
    paddingRight: 5,
    gap: 18,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: COLORS.grey,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  filterText: { fontSize: 16, fontFamily: "gt-regular" },
  dropDown: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.grey,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    right: 0,
    top: 40,
    zIndex: 10,
    overflow: "hidden",
  },
  dropDownText: {
    fontFamily: "gt-regular",
    fontSize: 16,
    width: "100%",
    padding: 8,
    textAlign: "center",
  },
  noItemsView: {
    height: 200,
    zIndex: -15,
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  noItemsText: { fontFamily: "gt-regular", fontSize: 18 },
  addStuff: {
    backgroundColor: COLORS.green,
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  addStuffText: {
    fontSize: 18,
    fontFamily: "gt-regular",
    color: "white",
  },
  itemsView: {
    width: "100%",
    height: 500,
    flexDirection: "row",
    zIndex: -15,
  },
  itemView: {
    borderWidth: 1,
    borderColor: COLORS.deepOrange,
    padding: 6,
    gap: 8,
    width: "49%",
    borderRadius: 10,
  },
  itemImage: {
    width: "100%",
    aspectRatio: "1/1",
    borderRadius: 5,
  },
  color: {
    flexDirection: "row",
    gap: 6,
  },
  colorsView: {
    width: 20,
    height: 20,
    borderRadius: 100,
  },
  typeStyle: {
    fontFamily: "gt-regular",
    fontSize: 16,
  },
  typeView: {
    gap: 3,
  },
});
