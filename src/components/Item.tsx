import { ItemProps } from "../types/general";
import { homeStyles } from "../../styles/home";
import { selectedItemState } from "../atoms/atoms";
import { useNavigation } from "@react-navigation/native";
import { useSetRecoilState } from "recoil";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { getIcon } from "../utils/helpers";

const Item = ({
  cut,
  colors,
  subtype,
  type,
  id,
  fabric,
  pattern,
  sleeve,
  neck,
  waist,
}: ItemProps) => {
  const {
    itemView,
    colorStyle,
    colorView,
    typeText,
    itemImage,
    imageView,
    itemTop,
  } = homeStyles;
  const setSelectedItem = useSetRecoilState(selectedItemState);
  const { navigate } = useNavigation();

  const goToItem = () => {
    setSelectedItem({
      cut,
      colors,
      subtype,
      type,
      id,
      fabric,
      pattern,
      sleeve,
      neck,
      waist,
    });
    navigate("Closet Item");
  };

  return (
    <TouchableOpacity style={itemView} onPress={goToItem}>
      <View style={itemTop}>
        <View style={imageView}>
          <Image
            source={{ uri: getIcon(type, subtype, sleeve) }}
            style={itemImage}
          />
        </View>

        <View style={colorView}>
          {colors.map((color, i) => (
            <View
              style={[
                {
                  backgroundColor: color,
                },
                colorStyle,
              ]}
              key={i}
            ></View>
          ))}
        </View>
      </View>
      <Text style={typeText}>{subtype}</Text>
    </TouchableOpacity>
  );
};

export default Item;
