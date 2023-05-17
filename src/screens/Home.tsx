import { View } from "react-native";
import { homeStyles } from "../../styles/home";
import Closet from "../components/Closet";
import Credits from "../components/Credits";
import HomeHeader from "../components/HomeHeader";

const Home = () => {
  const { container } = homeStyles;

  return (
    <View style={container}>
      <HomeHeader />
      <Credits />
      <Closet />
    </View>
  );
};

export default Home;
