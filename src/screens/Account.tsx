import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { COLORS } from "../../styles/colors";
import { homeStyles } from "../../styles/home";
import { clothingTypes } from "../utils/clothing";
import { getStyles } from "../utils/helpers";

const Account = () => {
  const [isHidden, setIsHidden] = useState(true);
  const [filter, setFilter] = useState("All");

  const { filterView, filterText, dropDown, dropDownText } = homeStyles;

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
    <View>
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
  );
};

export default Account;
