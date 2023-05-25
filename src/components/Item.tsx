import { ItemProps } from "../types/general";
import { homeStyles } from "../../styles/home";
import { selectedItem } from "../atoms/atoms";
import { useNavigation } from "@react-navigation/native";
import { useSetRecoilState } from "recoil";
import { Image, Text, View, TouchableOpacity } from "react-native";

const Item = ({ imageURL, colors, subType, type }: ItemProps) => {
  const { itemView, itemImage, color, colorsView, typeStyle, typeView } =
    homeStyles;
  const imageURI = { uri: imageURL };
  const setSelectedItem = useSetRecoilState(selectedItem);

  const { navigate } = useNavigation();

  const goToItem = () => {
    setSelectedItem({ colors, imageURL, subType, type });
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

      <View style={typeView}>
        {/* <Text style={typeStyle}>{type}</Text> */}
        <Text style={typeStyle}>{subType}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Item;
