import { Text, View } from "react-native";
import { OtherHeaderProps } from "../types/general";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { otherHeaderStyles } from "../../styles/general";

const OtherHeader = ({ title }: OtherHeaderProps) => {
  const { otherHeader, otherHeaderText } = otherHeaderStyles;

  const { goBack } = useNavigation();

  return (
    <View style={otherHeader}>
      <MaterialIcons
        name="keyboard-arrow-left"
        size={42}
        color="black"
        onPress={() => goBack()}
      />

      <Text style={otherHeaderText}>{title}</Text>
    </View>
  );
};

export default OtherHeader;
