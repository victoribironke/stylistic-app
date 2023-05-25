import { StyleSheet } from "react-native";

export const FONTS = {
  regular: "gt-regular",
  medium: "gt-medium",
};

export const COLORS = {
  primary: "#FFEF00",
  blue: "#3F5EFB",
  purple: "#E142D3",
  pink: "#FF4D9A",
  orange: "#FFC353",
  green: "#16A34A",
  deepOrange: "#FF8769",
  grey: "#808080",
  gray: "#f2f2f2",
};

export const otherHeaderStyles = StyleSheet.create({
  otherHeader: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  otherHeaderText: { fontFamily: FONTS.medium, fontSize: 22 },
});

export const dropDownStyles = StyleSheet.create({
  containerView: {
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
  containerText: { fontSize: 16, fontFamily: FONTS.regular },
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
    width: 100,
  },
  dropDownText: {
    fontFamily: FONTS.regular,
    fontSize: 16,
    width: "100%",
    padding: 10,
    textAlign: "center",
  },
});
