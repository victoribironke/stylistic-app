import { Text, TouchableOpacity, View } from "react-native";
import { homeStyles } from "../../styles/home";
import { useRecoilState } from "recoil";
import { ItemProps } from "../types/general";
import Items from "./Items";
import NoItems from "./NoItems";
import { clothData } from "../utils/data";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { user } from "../atoms/atoms";

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

  const [{ closetItems }, setItems] = useRecoilState(user);

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

      {closetItems === null ? <NoItems /> : <Items data={clothData} />}
    </View>
  );
};

export default Closet;
