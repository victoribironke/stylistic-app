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
  footerText: { fontSize: 18 },
  footerButton: {
    borderBottomColor: COLORS.blue,
    borderBottomWidth: 1,
    paddingBottom: 2,
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
    color: COLORS.blue,
    fontSize: 16,
    fontFamily: FONTS.medium,
  },
  loginView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
  },
  forgotButton: {
    borderBottomColor: COLORS.blue,
    borderBottomWidth: 1,
    paddingBottom: 2,
  },
  forgotText: { fontFamily: FONTS.regular, fontSize: 16 },
});
