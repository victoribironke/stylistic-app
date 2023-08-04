import OtherHeader from "../components/OtherHeader";
import { ScrollView, Text, TouchableOpacity } from "react-native";
import { addStuffStyles } from "../../styles/add-stuff";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue, useResetRecoilState } from "recoil";
import { selectionState, userState } from "../atoms/atoms";
import { randomString } from "../utils/helpers";
import { loginSignupStyles } from "../../styles/login-signup";
import Selection, {
  ColorSelection,
  AccentColorSelection,
} from "../components/Selection";
import { clothingTypes, subTypes, extraTypes } from "../utils/clothing";
import { arrayUnion, doc, setDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { colorData } from "../utils/data";
import { useNavigation } from "@react-navigation/native";

const AddStuff = () => {
  const { uid } = useRecoilValue(userState);
  const [subtypeArr, setSubtypeArr] = useState<string[]>([]);
  const [cutTypeArr, setCutTypeArr] = useState<string[]>([]);
  const { errorText, loadingText } = loginSignupStyles;
  const { container, button, buttonText } = addStuffStyles;
  const [selections, setSelections] = useRecoilState(selectionState);
  const resetSelections = useResetRecoilState(selectionState);
  const { navigate } = useNavigation();
  const isNotFootwear =
    selections.type === "Shirt" ||
    selections.type === "Layer" ||
    selections.type === "Trouser";

  useEffect(() => {
    setSelections({
      ...selections,
      cut: "",
      fabric: "",
      pattern: "",
      sleeve: "",
      subtype: "",
      waist: "",
      accentColors: [""],
      mainColor: "",
      neck: "",
    });

    if (selections.type === "Shirt") {
      setSubtypeArr(subTypes.shirts);
      setCutTypeArr(extraTypes.shirtCutTypes);
    } else if (selections.type === "Layer") {
      setSubtypeArr(subTypes.layers);
      setCutTypeArr(extraTypes.shirtCutTypes);
    } else if (selections.type === "Trouser") {
      setSubtypeArr(subTypes.trousers);
      setCutTypeArr(extraTypes.trousersCutTypes);
    } else if (selections.type === "Footwear") {
      setSubtypeArr(subTypes.footwears);
    } else {
      setSubtypeArr([]);
      setCutTypeArr([]);
    }
  }, [selections.type]);

  useEffect(resetSelections, []);

  const addItem = async () => {
    const id = randomString();
    const newSelections = { ...selections, colors: [""] };
    newSelections.colors = [
      newSelections.mainColor,
      ...newSelections.accentColors,
    ].filter((a) => a !== "");

    // after adding something to the db, clear the selection state

    await setDoc(
      doc(db, "users", uid),
      {
        closetItems: arrayUnion({
          id,
          type: newSelections.type,
          subtype: newSelections.subtype,
          cut: newSelections.cut,
          fabric: newSelections.fabric,
          pattern: newSelections.pattern,
          sleeve: newSelections.sleeve,
          waist: newSelections.waist,
          colors: newSelections.colors,
          neck: newSelections.neck,
        }),
      },
      { merge: true }
    );
  };

  return (
    <ScrollView
      style={container}
      contentContainerStyle={{
        alignItems: "center",
        paddingBottom: 50,
        gap: 20,
      }}
      showsHorizontalScrollIndicator={false}
    >
      <OtherHeader title="Add New Item" />

      <Selection
        arr={clothingTypes}
        title="Type"
        stateToCheck={selections.type}
        action={(e) => setSelections({ ...selections, type: e })}
      />

      {selections.type && (
        <Selection
          arr={subtypeArr}
          title="Subtype"
          stateToCheck={selections.subtype}
          action={(e) => setSelections({ ...selections, subtype: e })}
        />
      )}

      {isNotFootwear && (
        <>
          <Selection
            arr={extraTypes.fabricTypes}
            title="Fabric"
            stateToCheck={selections.fabric}
            action={(e) => setSelections({ ...selections, fabric: e })}
          />

          <Selection
            arr={cutTypeArr}
            title="Cut"
            stateToCheck={selections.cut}
            action={(e) => setSelections({ ...selections, cut: e })}
          />
        </>
      )}

      {(selections.type === "Layer" || selections.type === "Shirt") && (
        <>
          <Selection
            arr={extraTypes.sleeveType}
            title="Sleeve"
            stateToCheck={selections.sleeve}
            action={(e) => setSelections({ ...selections, sleeve: e })}
          />

          <Selection
            arr={extraTypes.neckTypes}
            title="Neck"
            stateToCheck={selections.neck}
            action={(e) => setSelections({ ...selections, neck: e })}
          />

          <Selection
            arr={extraTypes.patterns}
            title="Pattern"
            stateToCheck={selections.pattern}
            action={(e) => setSelections({ ...selections, pattern: e })}
          />
        </>
      )}

      {selections.type === "Trouser" && (
        <>
          <Selection
            arr={extraTypes.patterns}
            title="Pattern"
            stateToCheck={selections.pattern}
            action={(e) => setSelections({ ...selections, pattern: e })}
          />
          <Selection
            arr={extraTypes.waistTypes}
            title="Waist"
            stateToCheck={selections.waist}
            action={(e) => setSelections({ ...selections, waist: e })}
          />
        </>
      )}

      <ColorSelection
        action={(e) => setSelections({ ...selections, mainColor: e })}
        arr={colorData.map((s) => s.mainColor)}
        title="Main Color"
        stateToCheck={selections.mainColor}
      />

      <AccentColorSelection
        action={() => navigate("Color Selection")}
        arr={selections.accentColors}
        title="Accent Colors (Select up to 4)"
      />

      <TouchableOpacity style={button} onPress={addItem}>
        <Text style={buttonText}>Add</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default AddStuff;
