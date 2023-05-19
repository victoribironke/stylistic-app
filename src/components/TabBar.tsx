import { View, Text, TouchableOpacity } from "react-native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import TabBarIcon from "./TabBarIcon";
import { tabBarStyles } from "../../styles/tab-bar";

const TabBar = ({ state, descriptors, navigation }: BottomTabBarProps) => {
  const { container, item, text } = tabBarStyles;

  return (
    <View style={container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        if (label !== "Buy Credits")
          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              style={item}
              key={index}
            >
              <TabBarIcon isFocused={isFocused} label={label} />
              <Text style={text}>{label}</Text>
            </TouchableOpacity>
          );
      })}
    </View>
  );
};

export default TabBar;
