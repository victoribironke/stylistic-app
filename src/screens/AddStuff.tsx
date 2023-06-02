import OtherHeader from "../components/OtherHeader";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { addStuffStyles } from "../../styles/add-stuff";
import { useEffect, useState } from "react";
import {
  requestMediaLibraryPermissionsAsync,
  launchImageLibraryAsync,
  MediaTypeOptions,
} from "expo-image-picker";
import { auth, db, storage } from "../firebase/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useRecoilValue } from "recoil";
import { userState } from "../atoms/atoms";
import { randomString } from "../utils/helpers";
import { loginSignupStyles } from "../../styles/login-signup";

const AddStuff = () => {
  const { container, button, buttonText } = addStuffStyles;
  const { errorText, loadingText } = loginSignupStyles;
  const [hasGalleryPermission, setHasGalleryPermission] = useState(false);
  const [image, setImage] = useState("");
  const [uploaded, setUploaded] = useState(false);
  const [error, setError] = useState("");
  const [uploading, setUploading] = useState("");
  const [disabled, setDisabled] = useState(false);
  const { uid } = useRecoilValue(userState);

  useEffect(() => {
    (async () => {
      const status = await requestMediaLibraryPermissionsAsync();
      setHasGalleryPermission(status.granted);
    })();
  }, []);

  const uploadImage = async () => {
    setError("");
    setDisabled(true);

    const imageData = await fetch(image);
    const imageBlob = await imageData.blob();
    const storageRef = ref(storage, `${uid}/${randomString()}`);

    try {
      setUploading("Uploading your image...");
      const uploadTask = await uploadBytes(storageRef, imageBlob);
      const downloadURL = await getDownloadURL(uploadTask.ref);

      setUploading("Uploaded!");
      setTimeout(() => setUploading(""), 1000);
      setUploaded(true);
    } catch (e) {
      setUploading("");
      setError("Error uploading your image...");
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
    // set a unique id for each item created
  };

  return (
    <View style={container}>
      <OtherHeader title="Add New Item" />

      {!uploaded && (
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

      {error && <Text style={errorText}>{error}</Text>}

      {uploading && <Text style={loadingText}>{uploading}</Text>}

      {image && !uploaded && (
        <TouchableOpacity
          style={button}
          onPress={uploadImage}
          disabled={disabled}
        >
          <Text style={buttonText}>Upload</Text>
        </TouchableOpacity>
      )}

      {image && uploaded && (
        <TouchableOpacity style={button} onPress={addItem}>
          <Text style={buttonText}>Add</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default AddStuff;
