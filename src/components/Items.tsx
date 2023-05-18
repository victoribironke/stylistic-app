import { FlatList, ScrollView, View, Text } from "react-native";
import { homeStyles } from "../../styles/home";
import { ItemProps, ItemsProps } from "../types/general";
import { splitArr } from "../utils/helpers";
import Item from "./Item";
import ScrollViewItem from "./ScrollViewItem";

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
      {topsArr.length > 0 ? (
        <ScrollViewItem text="Tops" data={topsArr} />
      ) : null}
      {socksArr.length > 0 ? (
        <ScrollViewItem text="Socks" data={socksArr} />
      ) : null}
      {shortsArr.length > 0 ? (
        <ScrollViewItem text="Shorts" data={shortsArr} />
      ) : null}
      {trousersArr.length > 0 ? (
        <ScrollViewItem text="Trousers" data={trousersArr} />
      ) : null}
      {footwearArr.length > 0 ? (
        <ScrollViewItem text="Footwear" data={footwearArr} />
      ) : null}
      {headwearArr.length > 0 ? (
        <ScrollViewItem text="Headwear" data={headwearArr} />
      ) : null}
    </ScrollView>
  );
};

export default Items;
