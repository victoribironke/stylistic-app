import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { buyCreditsStyles } from "../../styles/buy-credits";
import CreditCategory from "../components/CreditCategory";
import OtherHeader from "../components/OtherHeader";

const BuyCredits = () => {
  const { container, categoriesView, buyButton, buyButtonText } =
    buyCreditsStyles;

  const creditCategories = {
    one: { cost: 5, quantity: 10 },
    two: { cost: 10, quantity: 20 },
    three: { cost: 20, quantity: 50 },
    four: { cost: 30, quantity: 100 },
  };

  const [selected, setSelected] = useState("four");

  return (
    <View style={container}>
      <OtherHeader title="Buy Credits" />

      <View style={categoriesView}>
        <CreditCategory
          cost={5}
          isSelected={selected === "one"}
          quantity={10}
          onPress={() => setSelected("one")}
        />
        <CreditCategory
          cost={10}
          isSelected={selected === "two"}
          quantity={20}
          onPress={() => setSelected("two")}
        />
        <CreditCategory
          cost={20}
          isSelected={selected === "three"}
          quantity={50}
          onPress={() => setSelected("three")}
        />
        <CreditCategory
          cost={30}
          isSelected={selected === "four"}
          quantity={100}
          onPress={() => setSelected("four")}
        />
      </View>

      <TouchableOpacity style={buyButton} onPress={() => {}}>
        <Text style={buyButtonText}>Buy</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BuyCredits;
