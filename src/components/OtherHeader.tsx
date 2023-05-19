import { Text, View } from "react-native";
import { buyCreditsStyles } from "../../styles/buy-credits";
import { OtherHeaderProps } from "../types/general";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";

const OtherHeader = ({ title }: OtherHeaderProps) => {
  const { otherHeader, otherHeaderText } = buyCreditsStyles;

  const navigation = useNavigation();

  return (
    <View style={otherHeader}>
      <MaterialIcons
        name="keyboard-arrow-left"
        size={42}
        color="black"
        onPress={() => navigation.goBack()}
      />

      <Text style={otherHeaderText}>{title}</Text>
    </View>
  );
};

export default OtherHeader;
