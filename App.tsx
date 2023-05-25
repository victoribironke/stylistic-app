import { useFonts } from "expo-font";
import Home from "./src/screens/Home";
import Account from "./src/screens/Account";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Suggestions from "./src/screens/Suggestions";
import BuyCredits from "./src/screens/BuyCredits";
import { RecoilRoot } from "recoil";
import AddStuff from "./src/screens/AddStuff";
import ClosetItem from "./src/screens/ClosetItem";
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import LoginSignup from "./src/screens/LoginSignup";
import { app } from "./src/firebase/firebase";

const Stack = createNativeStackNavigator();

const App = () => {
  const [fontsLoaded] = useFonts({
    "gt-regular": require("./assets/fonts/GTWalsheimPro-Regular.ttf"),
    "gt-medium": require("./assets/fonts/GTWalsheimPro-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <RecoilRoot>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home Screen"
            component={Home}
            options={{ headerShown: false, animation: "slide_from_left" }}
          />
          <Stack.Screen
            name="Login Signup"
            component={LoginSignup}
            options={{ headerShown: false, animation: "slide_from_right" }}
          />
          <Stack.Screen
            name="Suggestions"
            options={{ headerShown: false, animation: "fade_from_bottom" }}
            component={Suggestions}
          />
          <Stack.Screen
            name="Account"
            options={{ headerShown: false, animation: "fade_from_bottom" }}
            component={Account}
          />
          <Stack.Screen
            name="Buy Credits"
            options={{ headerShown: false, animation: "fade_from_bottom" }}
            component={BuyCredits}
          />
          <Stack.Screen
            name="Add Stuff"
            options={{ headerShown: false, animation: "fade_from_bottom" }}
            component={AddStuff}
          />
          <Stack.Screen
            name="Closet Item"
            options={{ headerShown: false, animation: "fade_from_bottom" }}
            component={ClosetItem}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </RecoilRoot>
  );
};

export default App;
