import { ItemProps } from "../types/general";
import { homeStyles } from "../../styles/home";
import { selectedItemState } from "../atoms/atoms";
import { useNavigation } from "@react-navigation/native";
import { useSetRecoilState } from "recoil";
import { Image, Text, View, TouchableOpacity } from "react-native";

const Item = ({ imageURL, colors, subtype, type, id }: ItemProps) => {
  const { itemView, itemImage, color, colorsView, typeText } = homeStyles;
  const imageURI = { uri: imageURL };
  const setSelectedItem = useSetRecoilState(selectedItemState);

  const { navigate } = useNavigation();

  const goToItem = () => {
    setSelectedItem({ colors, imageURL, subtype, type, id });
    navigate("Closet Item");
  };

  return (
    <TouchableOpacity style={itemView} onPress={goToItem}>
      <Image source={imageURI} style={itemImage} />
      <View style={color}>
        {colors.map((color, i) => (
          <View style={[{ backgroundColor: color }, colorsView]} key={i}></View>
        ))}
      </View>

      <Text style={typeText}>{subtype}</Text>
    </TouchableOpacity>
  );
};

export default Item;
