import Item from "./Item";
import { homeStyles } from "../../styles/home";
import { ScrollViewItemProps } from "../types/general";
import { ScrollView, Text, View } from "react-native";

const ScrollViewItem = ({ data, text }: ScrollViewItemProps) => {
  const { scrollView, scrollItemView, scrollItemText } = homeStyles;

  return (
    <View style={scrollItemView}>
      <Text style={scrollItemText}>{text}</Text>
      <ScrollView
        style={scrollView}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {data.map((item, i) => (
          <Item
            colors={item.colors}
            imageURL={item.imageURL}
            subtype={item.subtype}
            type={item.type}
            id={item.id}
            key={i}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default ScrollViewItem;
