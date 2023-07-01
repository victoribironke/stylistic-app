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
  selectContainer: { width: "90%", gap: 10 },
  containerView: {
    borderRadius: 8,
    paddingLeft: 12,
    paddingRight: 8,
    gap: 18,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: COLORS.grey,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    zIndex: -1,
  },
  containerText: { fontSize: 16, fontFamily: FONTS.medium },
  dropDown: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.grey,
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
    borderColor: COLORS.blue,
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    fontFamily: FONTS.medium,
    fontSize: 18,
  },
});
