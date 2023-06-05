import ScrollViewItem from "./ScrollViewItem";
import { splitArr } from "../utils/helpers";
import { ScrollView } from "react-native";
import { homeStyles } from "../../styles/home";
import { ItemsProps } from "../types/general";

const Items = ({ data }: ItemsProps) => {
  const { itemsView } = homeStyles;
  const {
    topsArr,
    socksArr,
    shortsArr,
    trousersArr,
    footwearArr,
    headwearArr,
  } = splitArr(data);

  return (
    <ScrollView style={itemsView} showsVerticalScrollIndicator={false}>
      {topsArr.length > 0 && <ScrollViewItem text="Tops" data={topsArr} />}
      {socksArr.length > 0 && <ScrollViewItem text="Socks" data={socksArr} />}
      {shortsArr.length > 0 && (
        <ScrollViewItem text="Shorts" data={shortsArr} />
      )}
      {trousersArr.length > 0 && (
        <ScrollViewItem text="Trousers" data={trousersArr} />
      )}
      {footwearArr.length > 0 && (
        <ScrollViewItem text="Footwear" data={footwearArr} />
      )}
      {headwearArr.length > 0 && (
        <ScrollViewItem text="Headwear" data={headwearArr} />
      )}
    </ScrollView>
  );
};

export default Items;
