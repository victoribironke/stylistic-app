import OtherHeader from "../components/OtherHeader";
import { useRecoilValue } from "recoil";
import { selectedItemState, userState } from "../atoms/atoms";
import { closetItemStyles } from "../../styles/closet-item";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { arrayRemove, doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";

const ClosetItem = () => {
  const { colors, imageURL, subtype, type, id } =
    useRecoilValue(selectedItemState);
  const { uid } = useRecoilValue(userState);
  const {
    container,
    button,
    buttonText,
    colorsContainer,
    colorsView,
    image,
    separator,
    subTypeText,
    typeText,
    typesView,
  } = closetItemStyles;

  const deleteItem = async () => {
    await updateDoc(doc(db, "users", uid), {
      closetItems: arrayRemove({ colors, imageURL, subtype, type, id }),
    });
  };

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
