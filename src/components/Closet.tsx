import Items from "./Items";
import NoItems from "./NoItems";
import { userState } from "../atoms/atoms";
import { AntDesign } from "@expo/vector-icons";
import { homeStyles } from "../../styles/home";
import { useNavigation } from "@react-navigation/native";
import { useRecoilValue } from "recoil";
import { Text, TouchableOpacity, View } from "react-native";

const Closet = () => {
  const {
    closetView,
    itemsText,
    closetContainer,
    suggestions,
    suggestionsText,
    addStuff,
  } = homeStyles;
  const { navigate } = useNavigation();

  const { closetItems } = useRecoilValue(userState);

  return (
    <View style={closetContainer}>
      <View style={closetView}>
        <Text style={itemsText}>Closet Items</Text>

        <TouchableOpacity
          style={addStuff}
          onPress={() => navigate("Add Stuff")}
        >
          <AntDesign name="plus" color="white" size={16} />
        </TouchableOpacity>

        <TouchableOpacity
          style={suggestions}
          onPress={() => navigate("Suggestions")}
        >
          <Text style={suggestionsText}>Suggestions</Text>
        </TouchableOpacity>
      </View>

      {closetItems.length === 0 ? <NoItems /> : <Items data={closetItems} />}
    </View>
  );
};

export default Closet;
