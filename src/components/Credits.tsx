import { userState } from "../atoms/atoms";
import { homeStyles } from "../../styles/home";
import { useRecoilValue } from "recoil";
import { Text, TouchableOpacity, View } from "react-native";
import { openBrowserAsync } from "expo-web-browser";

const Credits = () => {
  const userData = useRecoilValue(userState);

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
        onPress={() =>
          openBrowserAsync(
            "https://stylistic.lemonsqueezy.com/checkout/buy/e4bed891-415e-4dbc-bd6a-a6b79a4b2b83"
          )
        }
        style={buyCredits}
      >
        <Text style={buyCreditsText}>Buy credits</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Credits;
