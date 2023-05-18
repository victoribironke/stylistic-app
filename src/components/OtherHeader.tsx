import { Text, View } from "react-native";
import { buyCreditsStyles } from "../../styles/buy-credits";
import { OtherHeaderProps } from "../types/general";
import { MaterialIcons } from "@expo/vector-icons";

const OtherHeader = ({ title }: OtherHeaderProps) => {
  const { otherHeader, otherHeaderText } = buyCreditsStyles;

  return (
    <View style={otherHeader}>
      <MaterialIcons name="keyboard-arrow-left" size={42} color="black" />

      <Text style={otherHeaderText}>{title}</Text>
    </View>
  );
};

export default OtherHeader;
