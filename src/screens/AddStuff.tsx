import OtherHeader from "../components/OtherHeader";
import { View } from "react-native";
import { addStuffStyles } from "../../styles/add-stuff";

const AddStuff = () => {
  const { container } = addStuffStyles;

  return (
    <View style={container}>
      <OtherHeader title="Add New Item" />
    </View>
  );
};

export default AddStuff;
