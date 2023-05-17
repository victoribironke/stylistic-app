import { Text, TouchableOpacity, View } from "react-native";
import { homeStyles } from "../../styles/home";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { clothingTypes } from "../utils/clothing";
import { getStyles } from "../utils/helpers";
import { ItemProps } from "../types/general";
import { COLORS } from "../../styles/colors";
import Items from "./Items";
import NoItems from "./NoItems";
import { clothData } from "../utils/data";

const Closet = () => {
  const {
    closetView,
    itemsText,
    closetContainer,
    filterView,
    filterText,
    dropDown,
    dropDownText,
  } = homeStyles;

  const [isHidden, setIsHidden] = useState(true);
  const [filter, setFilter] = useState("All");
  const [items, setItems] = useState<ItemProps[] | null>([]);

  const filterItems = (cloth: string) => {
    setFilter(cloth);
    setIsHidden((prev) => !prev);
  };

  const renderFilters = (cloth: string, i: number) => (
    <Text
      key={i}
      style={[
        {
          backgroundColor: i % 2 === 0 ? COLORS.gray : "white",
        },
        dropDownText,
      ]}
      onPress={() => filterItems(cloth)}
    >
      {cloth}
    </Text>
  );

  return (
    <View style={closetContainer}>
      <View style={closetView}>
        <Text style={itemsText}>Closet Items</Text>
        <TouchableOpacity
          style={filterView}
          onPress={() => setIsHidden((prev) => !prev)}
        >
          <Text style={filterText}>Filter</Text>
          <MaterialIcons
            name="keyboard-arrow-down"
            size={24}
            color="black"
            style={{
              transform: [{ rotate: isHidden ? "0deg" : "180deg" }],
            }}
          />
        </TouchableOpacity>
        <View
          style={[
            isHidden ? getStyles("none").show : getStyles("flex").show,
            dropDown,
          ]}
        >
          {["All", ...clothingTypes].map(renderFilters)}
        </View>
      </View>

      {items === null ? (
        <NoItems />
      ) : (
        <Items filter={filter} data={clothData} />
      )}
    </View>
  );
};

export default Closet;
