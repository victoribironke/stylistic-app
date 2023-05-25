import { useState } from "react";
import { SelectProps } from "../types/general";
import { MaterialIcons } from "@expo/vector-icons";
import { COLORS, dropDownStyles } from "../../styles/general";
import { Text, TouchableOpacity, View } from "react-native";

const Select = ({ arr, selectedIndex }: SelectProps) => {
  const [isHidden, setIsHidden] = useState(true);
  const [state, setState] = useState(arr[selectedIndex]);

  const { containerText, containerView, dropDown, dropDownText } =
    dropDownStyles;

  const filterItems = (label: string) => {
    setState(label);
    setIsHidden((prev) => !prev);
  };

  const renderFilters = (label: string, i: number) => (
    <Text
      key={i}
      style={[
        {
          backgroundColor: i % 2 === 0 ? COLORS.gray : "white",
        },
        dropDownText,
      ]}
      onPress={() => filterItems(label)}
    >
      {label}
    </Text>
  );

  return (
    <View>
      <TouchableOpacity
        style={containerView}
        onPress={() => setIsHidden((prev) => !prev)}
      >
        <Text style={containerText}>{state}</Text>
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
        style={[isHidden ? { display: "none" } : { display: "flex" }, dropDown]}
      >
        {arr.map(renderFilters)}
      </View>
    </View>
  );
};

export default Select;
