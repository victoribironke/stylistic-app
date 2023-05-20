import { Text, View, Image, TouchableOpacity } from "react-native";
import { homeStyles } from "../../styles/home";
import { useNavigation } from "@react-navigation/native";
import { profilePlaceholder } from "../utils/image-paths";
import { randomString } from "../utils/helpers";
// import { v4 } from "uuid";

const HomeHeader = () => {
  const { header, leftHeader, welcomeText, nameText, profileImage } =
    homeStyles;

  const { navigate } = useNavigation();

  const imageURI = {
    uri: profilePlaceholder(randomString()),
  };

  return (
    <View style={header}>
      <View style={leftHeader}>
        <Text style={welcomeText}>Welcome,</Text>
        <Text style={nameText}>Victor Ibironke</Text>
      </View>

      <TouchableOpacity onPress={() => navigate("Account")}>
        <Image source={imageURI} style={profileImage} />
      </TouchableOpacity>
    </View>
  );
};

export default HomeHeader;
