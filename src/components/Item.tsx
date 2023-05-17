import { Image, Text, View } from "react-native";
import { homeStyles } from "../../styles/home";
import { ItemProps } from "../types/general";

const Item = ({ imageURL, colors, subType, type }: ItemProps) => {
  const { itemView, itemImage, color, colorsView, typeStyle, typeView } =
    homeStyles;
  const imageURI = { uri: imageURL };

  return (
    <View style={itemView}>
      <Image source={imageURI} style={itemImage} />
      <View style={color}>
        {colors.map((color, i) => (
          <View style={[{ backgroundColor: color }, colorsView]} key={i}></View>
        ))}
      </View>

      <View style={typeView}>
        <Text style={typeStyle}>{type}</Text>
        <Text style={typeStyle}>{subType}</Text>
      </View>
    </View>
  );
};

export default Item;
