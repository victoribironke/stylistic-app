import { user } from "../atoms/atoms";
import { homeStyles } from "../../styles/home";
import { useNavigation } from "@react-navigation/native";
import { useRecoilValue } from "recoil";
import { Text, TouchableOpacity, View } from "react-native";

const Credits = () => {
  const { navigate } = useNavigation();
  const userData = useRecoilValue(user);

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
        <Text style={creditAmount}>{userData.credits}</Text>
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
