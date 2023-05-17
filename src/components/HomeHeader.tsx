import { Text, View, Image } from "react-native";
import { homeStyles } from "../../styles/home";
import { profilePlaceholder } from "../utils/image-paths";

const HomeHeader = () => {
  const {
    header,
    leftHeader,
    welcomeText,
    nameText,
    profileImage,
    profileView,
  } = homeStyles;

  const name = "Victor";
  const imageURI = {
    uri: profilePlaceholder(name),
  };

  return (
    <View style={header}>
      <View style={leftHeader}>
        <Text style={welcomeText}>Welcome,</Text>
        <Text style={nameText}>Victor Ibironke</Text>
      </View>

      {/* Check if the image is from dicebear or from google, if 
       if from dicebear, don't round the edges, else round the edges
       it should also be wrapped in a button or touchableopacity to lead to the account screen when tapped
      */}

      <Image source={imageURI} style={profileImage} />
    </View>
  );
};

export default HomeHeader;
