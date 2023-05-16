import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { useCallback } from "react";
import { homeStyles } from "./styles/home";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const App = () => {
  const { container } = homeStyles;
  const [fontsLoaded, error] = useFonts({
    GT: require("./assets/fonts/GTWalsheimPro-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  // check the document for any component you want to use

  return (
    <View style={container} onLayout={onLayoutRootView}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
};

export default App;
