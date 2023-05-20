import { Text, TouchableOpacity, View } from "react-native";
import { homeStyles } from "../../styles/home";
import { useNavigation } from "@react-navigation/native";

const Credits = () => {
  const { navigate } = useNavigation();

  const {
    credits,
    creditAmount,
    creditContainer,
    creditText,
    buyCredits,
    buyCreditsText,
  } = homeStyles;

  return (
    <View style={creditContainer}>
      <View style={credits}>
        <Text style={creditAmount}>100</Text>
        <Text style={creditText}>credits left</Text>
      </View>

      <TouchableOpacity
        onPress={() => navigate("Buy Credits")}
        style={buyCredits}
      >
        <Text style={buyCreditsText}>Buy credits</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Credits;
