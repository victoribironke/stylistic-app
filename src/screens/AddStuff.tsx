import { Text, View } from "react-native";
import { addStuffStyles } from "../../styles/add-stuff";
import OtherHeader from "../components/OtherHeader";

const AddStuff = () => {
  const { container } = addStuffStyles;

  return (
    <View style={container}>
      <OtherHeader title="Add New Item" />
    </View>
  );
};

export default AddStuff;
