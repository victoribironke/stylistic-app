import { useFonts } from "expo-font";
import Home from "./src/screens/Home";
import Account from "./src/screens/Account";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabBar from "./src/components/TabBar";
import Recommendation from "./src/screens/Recommendation";
import BuyCredits from "./src/screens/BuyCredits";

const Tab = createBottomTabNavigator();

const App = () => {
  const [fontsLoaded] = useFonts({
    "gt-regular": require("./assets/fonts/GTWalsheimPro-Regular.ttf"),
    "gt-medium": require("./assets/fonts/GTWalsheimPro-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Recommendation"
          options={{ headerShown: false }}
          component={Recommendation}
        />
        <Tab.Screen
          name="Account"
          options={{ headerShown: false }}
          component={Account}
        />
        <Tab.Screen
          name="Buy Credits"
          options={{ headerShown: false }}
          component={BuyCredits}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
