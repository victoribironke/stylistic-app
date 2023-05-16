import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { homeStyles } from "./styles/home";

// check the document for any component you want to use

const App = () => {
  const { container } = homeStyles;

  return (
    <View style={container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
};

export default App;
