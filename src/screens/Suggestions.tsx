import { View, Text } from "react-native";
import { suggestionStyles } from "../../styles/suggestions";
import OtherHeader from "../components/OtherHeader";

const Suggestions = () => {
  const { container } = suggestionStyles;

  return (
    <View style={container}>
      <OtherHeader title="Suggestions" />
    </View>
  );
};

export default Suggestions;
