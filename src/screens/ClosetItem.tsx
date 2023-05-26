import OtherHeader from "../components/OtherHeader";
import { COLORS } from "../../styles/general";
import { useRecoilValue } from "recoil";
import { selectedItemState } from "../atoms/atoms";
import { closetItemStyles } from "../../styles/closet-item";
import { Text, View, Image, TouchableOpacity } from "react-native";

const ClosetItem = () => {
  const { colors, imageURL, subType, type } = useRecoilValue(selectedItemState);
  const {
    container,
    button,
    buttonText,
    buttonsView,
    colorsContainer,
    colorsView,
    image,
    separator,
    subTypeText,
    typeText,
    typesView,
  } = closetItemStyles;

  return (
    <View style={container}>
      <OtherHeader title="Closet Item" />

      <Image source={{ uri: imageURL }} style={image} />

      <View style={colorsContainer}>
        {colors.map((color, i) => (
          <View style={[{ backgroundColor: color }, colorsView]} key={i}></View>
        ))}
      </View>

      <View style={typesView}>
        <Text style={typeText}>{type}</Text>
        <View style={separator}></View>
        <Text style={subTypeText}>{subType}</Text>
      </View>

      <View style={buttonsView}>
        <TouchableOpacity style={[{ backgroundColor: COLORS.blue }, button]}>
          <Text style={buttonText}>Edit</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[{ backgroundColor: "red" }, button]}>
          <Text style={buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ClosetItem;
