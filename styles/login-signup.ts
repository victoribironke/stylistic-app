import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "./general";

export const loginSignupStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 24,
  },
  footer: {
    justifyContent: "center",
    flexDirection: "row",
    gap: 6,
  },
  footerText: { fontSize: 15 },
  footerButton: {
    borderBottomColor: COLORS.deepOrange,
    borderBottomWidth: 1,
    paddingBottom: 4,
    paddingHorizontal: 2,
  },
  passwordView: { alignItems: "center", justifyContent: "center" },
  passwordIcon: { position: "absolute", right: 15 },
  actionButton: {
    backgroundColor: "white",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  actionText: { fontFamily: FONTS.medium, fontSize: 18 },
  errorText: {
    color: "red",
    fontSize: 16,
    fontFamily: FONTS.medium,
  },
  loadingText: {
    color: COLORS.deepOrange,
    fontSize: 16,
    fontFamily: FONTS.medium,
  },
});
