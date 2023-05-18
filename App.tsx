import { useFonts } from "expo-font";
import { useEffect, useState } from "react";
import Home from "./src/screens/Home";
import * as SplashScreen from "expo-splash-screen";
import BuyCredits from "./src/screens/BuyCredits";

// SplashScreen.preventAutoHideAsync();

const App = () => {
  const [fontsLoaded] = useFonts({
    "gt-regular": require("./assets/fonts/GTWalsheimPro-Regular.ttf"),
    "gt-medium": require("./assets/fonts/GTWalsheimPro-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <Home />
      {/* <BuyCredits /> */}
    </>
  );
};

export default App;
