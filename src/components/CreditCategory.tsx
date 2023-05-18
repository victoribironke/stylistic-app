import { Text, TouchableOpacity, View } from "react-native";
import { buyCreditsStyles } from "../../styles/buy-credits";
import { COLORS } from "../../styles/general";
import { CreditCategoryProps } from "../types/general";

const CreditCategory = ({
  isSelected,
  quantity,
  cost,
  onPress,
}: CreditCategoryProps) => {
  const { categoryView, leftCategory, creditQuantity, creditCost, selector } =
    buyCreditsStyles;

  return (
    <TouchableOpacity style={categoryView} onPress={onPress}>
      <View style={leftCategory}>
        <Text style={creditCost}>${cost}</Text>
        <Text style={creditQuantity}>{quantity} credits</Text>
      </View>

      <View style={selector}>
        <View
          style={{
            backgroundColor: isSelected ? COLORS.deepOrange : "white",
            width: 12,
            height: 12,
            borderRadius: 100,
          }}
        ></View>
      </View>
    </TouchableOpacity>
  );
};

export default CreditCategory;
