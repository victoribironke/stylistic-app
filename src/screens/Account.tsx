import OtherHeader from "../components/OtherHeader";
import { auth } from "../firebase/firebase";
import { userState } from "../atoms/atoms";
import { homeStyles } from "../../styles/home";
import { accountStyles } from "../../styles/account";
import { sendPasswordResetEmail, signOut } from "firebase/auth";
import { useRecoilValue, useResetRecoilState } from "recoil";
import { Text, TouchableOpacity, View, Image, TextInput } from "react-native";
import { COLORS } from "../../styles/general";
import { useState } from "react";

const Account = () => {
  const [message, setMessage] = useState("");
  const userData = useRecoilValue(userState);
  const resetUserState = useResetRecoilState(userState);

  const {
    container,
    detailsView,
    textView,
    emailText,
    nameText,
    button,
    buttonText,
    messageText,
  } = accountStyles;
  const { profileImage } = homeStyles;

  const imageURI = {
    uri: userData.imageURL,
  };

  const signOutUser = () => {
    resetUserState();
    signOut(auth);
  };

  const resetPassword = async () => {
    await sendPasswordResetEmail(auth, userData.email);
    setMessage("Password reset link sent!");

    setTimeout(() => setMessage(""), 1000);
  };

  return (
    <View style={container}>
      <OtherHeader title="Account" />

      <View style={detailsView}>
        <Image source={imageURI} style={profileImage} />
        <View style={textView}>
          <Text style={nameText}>{userData.name}</Text>
          <Text style={emailText}>{userData.email}</Text>
        </View>
      </View>

      {message && <Text style={messageText}>{message}</Text>}

      <TouchableOpacity
        style={[{ backgroundColor: COLORS.blue }, button]}
        onPress={resetPassword}
      >
        <Text style={buttonText}>Reset your password</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[{ backgroundColor: "red" }, button]}
        onPress={signOutUser}
      >
        <Text style={buttonText}>Sign out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Account;
