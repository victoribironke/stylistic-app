import { useState } from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { accountStyles } from "../../styles/account";
import Select from "../components/Select";
import OtherHeader from "../components/OtherHeader";
import { user } from "../atoms/atoms";
import { useRecoilValue } from "recoil";
import { profilePlaceholder } from "../utils/image-paths";
import { homeStyles } from "../../styles/home";
import { randomString } from "../utils/helpers";

const Account = () => {
  const userData = useRecoilValue(user);

  const {
    container,
    detailsView,
    textView,
    emailText,
    nameText,
    editText,
    recSettings,
    save,
    saveText,
  } = accountStyles;
  const { profileImage } = homeStyles;

  let imageURI;

  if (userData.imageURL !== "") {
    imageURI = { uri: userData.imageURL };
  }

  imageURI = {
    uri: profilePlaceholder(randomString()),
  };

  return (
    <View style={container}>
      <OtherHeader title="Account" />

      <View style={detailsView}>
        <Image source={imageURI} style={profileImage} />
        <View style={textView}>
          <Text style={nameText}>Victor Ibironke</Text>
          <Text style={emailText}>ibikidsfc56@gmail.com</Text>
        </View>
      </View>

      <Text style={editText}>
        Change your name and profile picture on your google account.
      </Text>

      <View style={recSettings}>
        <Select arr={["1", "2"]} selectedIndex={1} />
        <TouchableOpacity style={save}>
          <Text style={saveText}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Account;
