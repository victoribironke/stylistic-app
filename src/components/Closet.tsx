import { Text, TouchableOpacity, View } from "react-native";
import { homeStyles } from "../../styles/home";
import { useState } from "react";
import { ItemProps } from "../types/general";
import Items from "./Items";
import NoItems from "./NoItems";
import { clothData } from "../utils/data";

const Closet = () => {
  const { closetView, itemsText, closetContainer, addStuff, addStuffText } =
    homeStyles;

  const [items, setItems] = useState<ItemProps[] | null>([]);

  return (
    <View style={closetContainer}>
      <View style={closetView}>
        <Text style={itemsText}>Closet Items</Text>

        <TouchableOpacity style={addStuff} onPress={() => {}}>
          <Text style={addStuffText}>Add stuff</Text>
        </TouchableOpacity>
      </View>

      {items === null ? <NoItems /> : <Items data={clothData} />}
    </View>
  );
};

export default Closet;
