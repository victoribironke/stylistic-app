import { user } from "../atoms/atoms";
import { homeStyles } from "../../styles/home";
import { useNavigation } from "@react-navigation/native";
import { useRecoilValue } from "recoil";
import { Text, View, Image, TouchableOpacity } from "react-native";

const HomeHeader = () => {
  const { header, leftHeader, welcomeText, nameText, profileImage } =
    homeStyles;
  const userData = useRecoilValue(user);

  const { navigate } = useNavigation();

  const imageURI = {
    uri: userData.imageURL,
  };

  return (
    <View style={header}>
      <View style={leftHeader}>
        <Text style={welcomeText}>Welcome,</Text>
        <Text style={nameText}>{userData.name}</Text>
      </View>

      <TouchableOpacity onPress={() => navigate("Account")}>
        <Image source={imageURI} style={profileImage} />
      </TouchableOpacity>
    </View>
  );
};

export default HomeHeader;
