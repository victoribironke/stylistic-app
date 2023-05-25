import { user } from "../atoms/atoms";
import { homeStyles } from "../../styles/home";
import { useRecoilValue } from "recoil";
import { Text, TouchableOpacity, View } from "react-native";
import { openBrowserAsync } from "expo-web-browser";

const Credits = () => {
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
        onPress={() =>
          openBrowserAsync(
            "https://stylistic.lemonsqueezy.com/checkout?cart=5f6aa997-6519-465b-af9f-b90120bbc44a"
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
