import { FlatList, View } from "react-native";
import { homeStyles } from "../../styles/home";
import { ItemProps, ItemsProps } from "../types/general";
import Item from "./Item";

const Items = ({ filter, data }: ItemsProps) => {
  const { itemsView } = homeStyles;

  const separator = () => {
    return <View style={{ padding: 4 }}></View>;
  };

  const renderItem = ({ item }: { item: ItemProps }) => (
    <Item
      colors={item.colors}
      imageURL={item.imageURL}
      subType={item.subType}
      type={item.type}
    />
  );

  return (
    <View style={itemsView}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, i) => i.toString()}
        numColumns={2}
        horizontal={false}
        ItemSeparatorComponent={separator}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Items;
