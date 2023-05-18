import { ScrollView, Text, View } from "react-native";
import { homeStyles } from "../../styles/home";
import { ScrollViewItemProps } from "../types/general";
import Item from "./Item";

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
            subType={item.subType}
            type={item.type}
            key={i}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default ScrollViewItem;
