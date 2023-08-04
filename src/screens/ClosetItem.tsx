import OtherHeader from "../components/OtherHeader";
import { useRecoilValue } from "recoil";
import { selectedItemState, userState } from "../atoms/atoms";
import { closetItemStyles } from "../../styles/closet-item";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { arrayRemove, doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { getIcon } from "../utils/helpers";

const ClosetItem = () => {
  const { colors, id, cut, fabric, pattern, sleeve, subtype, type, waist } =
    useRecoilValue(selectedItemState);
  const { uid } = useRecoilValue(userState);
  const {
    container,
    button,
    buttonText,
    colorsContainer,
    colorsView,
    separator,
    subTypeText,
    typeText,
    typesView,
    imageView,
    itemImage,
  } = closetItemStyles;

  const deleteItem = async () => {
    await updateDoc(doc(db, "users", uid), {
      closetItems: arrayRemove({
        colors,
        id,
        cut,
        fabric,
        pattern,
        sleeve,
        subtype,
        type,
        waist,
      }),
    });
  };

  return (
    <View style={container}>
      <OtherHeader title="Closet Item" />

      <View style={imageView}>
        <Image
          source={{ uri: getIcon(type, subtype, sleeve) }}
          style={itemImage}
        />
      </View>

      <View style={colorsContainer}>
        {colors.map((color, i) => (
          <View style={[{ backgroundColor: color }, colorsView]} key={i}></View>
        ))}
      </View>

      <View style={typesView}>
        <Text style={typeText}>{type}</Text>
        <View style={separator}></View>
        <Text style={subTypeText}>{subtype}</Text>
      </View>

      <TouchableOpacity
        style={[{ backgroundColor: "red" }, button]}
        onPress={deleteItem}
      >
        <Text style={buttonText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ClosetItem;
