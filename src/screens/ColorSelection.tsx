import { Text, TouchableOpacity, View, ScrollView } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { colorData } from "../utils/data";
import { useNavigation } from "@react-navigation/native";
import { colorSelectionStyles } from "../../styles/color-selection";
import { Feather } from "@expo/vector-icons";
import { selectionState } from "../atoms/atoms";
import { useRecoilState } from "recoil";

const ColorSelection = () => {
  const {
    closeButton,
    headerText,
    headerView,
    modalView,
    color,
    colorsSelectView,
  } = colorSelectionStyles;
  const { goBack } = useNavigation();
  const newArr = colorData.reduce((a: string[], b) => a.concat(b.shades), []);
  const [selections, setSelections] = useRecoilState(selectionState);

  const updateAccents = (s: string) => {
    if (selections.accentColors.includes(s)) {
      setSelections({
        ...selections,
        accentColors: selections.accentColors.filter((a) => a !== s),
      });
    } else {
      if (selections.accentColors.length <= 4) {
        setSelections({
          ...selections,
          accentColors: [...selections.accentColors, s],
        });
      }
    }
  };

  return (
    <ScrollView
      style={modalView}
      contentContainerStyle={{ alignItems: "center", justifyContent: "center" }}
    >
      <View style={headerView}>
        <Text style={headerText}>Select accent colors</Text>
        <TouchableOpacity onPress={goBack} style={closeButton}>
          <AntDesign name="close" size={16} color="white" />
        </TouchableOpacity>
      </View>

      <View style={colorsSelectView}>
        {newArr.map((a, i) => (
          <TouchableOpacity
            style={[{ backgroundColor: a }, color]}
            key={i}
            onPress={() => updateAccents(a)}
          >
            {selections.accentColors.includes(a) && (
              <Feather name="check" size={18} color="white" />
            )}
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default ColorSelection;
