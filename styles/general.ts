import { StyleSheet } from "react-native";

export const FONTS = {
  regular: "gt-regular",
  medium: "gt-medium",
};

export const COLORS = {
  green: "#16A34A",
  gray: "#d1d5db",
  primary: "#710193",
  primary100: "#61087d",
  primary200: "#4a0e5d",
  primary300: "#2d1235",
  primary400: "#140e16",
  purpleLight: "#fe95e2",
  regular: "#9f39fe",
  black: "#000000",
  white: "#ffffff",
  red: "#ff0000",
};

export const otherHeaderStyles = StyleSheet.create({
  otherHeader: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  otherHeaderText: {
    fontFamily: FONTS.medium,
    fontSize: 22,
    color: COLORS.white,
  },
});

export const dropDownStyles = StyleSheet.create({
  selectContainer: { width: "90%", gap: 10 },
  containerView: {
    borderRadius: 8,
    paddingLeft: 12,
    paddingRight: 8,
    gap: 18,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: COLORS.gray,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    zIndex: -1,
  },
  containerText: {
    fontSize: 16,
    fontFamily: FONTS.medium,
    color: COLORS.white,
  },
  dropDown: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.gray,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    paddingVertical: 5,
    paddingHorizontal: 5,
    flexWrap: "wrap",
    gap: 5,
  },
  dropDownText: {
    fontFamily: FONTS.regular,
    fontSize: 16,
    padding: 10,
    textAlign: "center",
    backgroundColor: "white",
    borderRadius: 5,
  },
});

export const formStyles = StyleSheet.create({
  formView: { width: "80%", gap: 10 },
  input: {
    borderWidth: 1,
    borderColor: COLORS.white,
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    fontFamily: FONTS.medium,
    fontSize: 18,
    color: COLORS.white,
  },
});
