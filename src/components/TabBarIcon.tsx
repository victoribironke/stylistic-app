import {
  Ionicons,
  MaterialCommunityIcons,
  AntDesign,
} from "@expo/vector-icons";
import { IconProps } from "../types/general";

const TabBarIcon = ({ label, isFocused }: IconProps) => {
  if (label === "Home")
    return <Ionicons name={isFocused ? "home" : "home-outline"} size={20} />;
  else if (label === "Account")
    return (
      <MaterialCommunityIcons
        name={isFocused ? "account" : "account-outline"}
        size={22}
      />
    );

  return <AntDesign name={isFocused ? "star" : "staro"} size={21} />;
};

export default TabBarIcon;
