import ScrollViewItem from "./ScrollViewItem";
import { splitArr } from "../utils/helpers";
import { ScrollView } from "react-native";
import { homeStyles } from "../../styles/home";
import { ItemsProps } from "../types/general";

const Items = ({ data }: ItemsProps) => {
  const { itemsView } = homeStyles;
  const { trousersArr, footwearArr, layersArr, shirtsArr } = splitArr(data);

  return (
    <ScrollView style={itemsView} showsVerticalScrollIndicator={false}>
      {shirtsArr.length > 0 && (
        <ScrollViewItem text="Shirts" data={shirtsArr} />
      )}
      {layersArr.length > 0 && (
        <ScrollViewItem text="Layers" data={layersArr} />
      )}
      {trousersArr.length > 0 && (
        <ScrollViewItem text="Trousers" data={trousersArr} />
      )}
      {footwearArr.length > 0 && (
        <ScrollViewItem text="Footwear" data={footwearArr} />
      )}
    </ScrollView>
  );
};

export default Items;
