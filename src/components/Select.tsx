import { useState } from "react";
import { SelectProps } from "../types/general";
import { MaterialIcons } from "@expo/vector-icons";
import { dropDownStyles } from "../../styles/general";
import { Text, TouchableOpacity, View } from "react-native";
import { useRecoilState } from "recoil";
import { currentTypeState } from "../atoms/atoms";

const Select = ({ arr, selectedIndex, type }: SelectProps) => {
  const [isHidden, setIsHidden] = useState(true);
  const [state, setState] = useState(arr[selectedIndex]);
  const [currentType, setCurrentType] = useRecoilState(currentTypeState);

  const {
    containerText,
    containerView,
    dropDown,
    dropDownText,
    selectContainer,
  } = dropDownStyles;

  const filterItems = (label: string) => {
    setState(label);
    setIsHidden((prev) => !prev);

    if (type) setCurrentType({ ...currentType, type: label });
    else setCurrentType({ ...currentType, subtype: label });
  };

  return (
    <View style={selectContainer}>
      <TouchableOpacity
        style={containerView}
        onPress={() => setIsHidden((prev) => !prev)}
      >
        <Text style={containerText}>{state}</Text>
        <MaterialIcons
          name="keyboard-arrow-down"
          size={24}
          color="white"
          style={{
            transform: [{ rotate: isHidden ? "0deg" : "180deg" }],
          }}
        />
      </TouchableOpacity>

      {!isHidden && (
        <View style={dropDown}>
          {arr.map((label, i) => (
            <Text
              key={i}
              style={dropDownText}
              onPress={() => filterItems(label)}
            >
              {label}
            </Text>
          ))}
        </View>
      )}
    </View>
  );
};

export default Select;
