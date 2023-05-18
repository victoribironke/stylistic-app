import { Text, TouchableOpacity, View } from "react-native";
import { homeStyles } from "../../styles/home";

const NoItems = () => {
  const { noItemsView, noItemsText, addStuff, addStuffText } = homeStyles;

  return (
    <View style={noItemsView}>
      <Text style={noItemsText}>No items.</Text>
      <TouchableOpacity style={addStuff} onPress={() => {}}>
        <Text style={addStuffText}>Add stuff</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NoItems;
