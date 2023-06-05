import OtherHeader from "../components/OtherHeader";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { addStuffStyles } from "../../styles/add-stuff";
import { useEffect, useState } from "react";
import {
  requestMediaLibraryPermissionsAsync,
  launchImageLibraryAsync,
  MediaTypeOptions,
} from "expo-image-picker";
import { db, storage } from "../firebase/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useRecoilValue } from "recoil";
import { currentTypeState, userState } from "../atoms/atoms";
import { randomString, rgbToHex } from "../utils/helpers";
import { loginSignupStyles } from "../../styles/login-signup";
import { ImageDataRes } from "../types/general";
import { closetItemStyles } from "../../styles/closet-item";
import Select from "../components/Select";
import { clothingTypes, subtypes } from "../utils/clothing";
import { doc, setDoc, arrayUnion } from "firebase/firestore";

const AddStuff = () => {
  const [image, setImage] = useState("");
  const { uid } = useRecoilValue(userState);
  const [status, setStatus] = useState({
    uploading: "",
    uploaded: false,
    isError: false,
    selected: false,
    adding: "",
  });
  const [colors, setColors] = useState<string[]>([]);
  const [disabled, setDisabled] = useState(false);
  const [subtypeArr, setSubtypeArr] = useState<string[]>([]);
  const { errorText, loadingText } = loginSignupStyles;
  const { container, button, buttonText } = addStuffStyles;
  const { colorsContainer, colorsView } = closetItemStyles;
  const currentType = useRecoilValue(currentTypeState);

  useEffect(() => {
    requestMediaLibraryPermissionsAsync();

    const { subtype, type } = currentType;
    if (type !== "Select type" && subtype !== "Select subtype") {
      setStatus({ ...status, selected: true });
    } else setStatus({ ...status, selected: false });

    if (type === "Top") setSubtypeArr(subtypes.tops);
    else if (type === "Socks") setSubtypeArr(subtypes.socks);
    else if (type === "Shorts") setSubtypeArr(subtypes.shorts);
    else if (type === "Trousers") setSubtypeArr(subtypes.trousers);
    else if (type === "Footwear") setSubtypeArr(subtypes.footwear);
    else if (type === "Headwear") setSubtypeArr(subtypes.headwear);
    else setSubtypeArr([]);
  }, [currentType]);

  const uploadImage = async () => {
    setStatus({ ...status, isError: false });
    setDisabled(true);

    const imageBlob = await (await fetch(image)).blob();
    const storageRef = ref(storage, `${uid}/${randomString()}`);

    try {
      setStatus({ ...status, uploading: "Uploading your image..." });
      const uploadTask = await uploadBytes(storageRef, imageBlob);
      const downloadURL = await getDownloadURL(uploadTask.ref);

      const data: ImageDataRes = await (
        await fetch("https://get-image-data-stylistic.onrender.com", {
          headers: { url: downloadURL },
        })
      ).json();

      const colors = data.colors
        .slice(0, 5)
        .map(({ red, blue, green }) => rgbToHex(red, blue, green));

      setStatus({ ...status, uploading: "Uploaded!" });

      setTimeout(() => {
        setStatus({ ...status, uploading: "", uploaded: true });
        setColors(colors);
        setImage(downloadURL);
      }, 1000);
    } catch (e) {
      setStatus({ ...status, uploading: "true", isError: true });
      setDisabled(false);
    }
  };

  const pickImage = async () => {
    const result = await launchImageLibraryAsync({
      mediaTypes: MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const addItem = async () => {
    const id = randomString();

    setStatus({ ...status, adding: "Adding to your closet..." });
    await setDoc(
      doc(db, "users", uid),
      {
        closetItems: arrayUnion({
          id,
          colors,
          type: currentType.type,
          subtype: currentType.subtype,
          imageURL: image,
        }),
      },
      { merge: true }
    );
    setStatus({ ...status, adding: "Added" });
  };

  return (
    <View style={container}>
      <OtherHeader title="Add New Item" />

      {!status.uploaded && (
        <TouchableOpacity style={button} onPress={pickImage}>
          <Text style={buttonText}>Select Image</Text>
        </TouchableOpacity>
      )}

      {image && (
        <Image
          source={{ uri: image }}
          style={{ width: "90%", aspectRatio: "1/1", borderRadius: 20 }}
        />
      )}

      {status.isError && (
        <Text style={errorText}>Error uploading your image...</Text>
      )}

      {status.uploading && <Text style={loadingText}>{status.uploading}</Text>}

      {image && !status.uploaded && (
        <TouchableOpacity
          style={button}
          onPress={uploadImage}
          disabled={disabled}
        >
          <Text style={buttonText}>Upload</Text>
        </TouchableOpacity>
      )}

      {colors && (
        <View style={colorsContainer}>
          {colors.map((color, i) => (
            <View
              style={[{ backgroundColor: color }, colorsView]}
              key={i}
            ></View>
          ))}
        </View>
      )}

      {image && status.uploaded && (
        <>
          <Select
            arr={["Select type", ...clothingTypes]}
            selectedIndex={0}
            type={true}
          />
          <Select
            arr={["Select subtype", ...subtypeArr]}
            selectedIndex={0}
            type={false}
          />
        </>
      )}

      {status.adding && <Text style={loadingText}>{status.adding}</Text>}

      {image && status.uploaded && status.selected && (
        <TouchableOpacity style={button} onPress={addItem}>
          <Text style={buttonText}>Add</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default AddStuff;
