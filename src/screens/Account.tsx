import OtherHeader from "../components/OtherHeader";
import { auth } from "../firebase/firebase";
import { userState } from "../atoms/atoms";
import { homeStyles } from "../../styles/home";
import { accountStyles } from "../../styles/account";
import { sendPasswordResetEmail, signOut } from "firebase/auth";
import { FieldValue, Firestore } from "firebase/firestore";
import { useRecoilValue, useResetRecoilState } from "recoil";
import { Text, TouchableOpacity, View, Image } from "react-native";
import { COLORS } from "../../styles/general";
import { useState } from "react";
import { formatDate } from "../utils/helpers";

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
    joinedText,
    messageText,
  } = accountStyles;
  const { profileImage } = homeStyles;

  const imageURI = {
    uri: userData.imageURL,
  };

  const convertTimestamp = (timestamp: any) => {
    const date = timestamp.toDate();
    const mm = date.getMonth();
    const dd = date.getDate();
    const yyyy = date.getFullYear();

    const [day, month, year] = formatDate(dd, mm, yyyy);

    return `${day} ${month}, ${year}`;
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
        style={[{ backgroundColor: "red", marginBottom: "auto" }, button]}
        onPress={signOutUser}
      >
        <Text style={buttonText}>Sign out</Text>
      </TouchableOpacity>

      <Text style={joinedText}>{`Joined: ${convertTimestamp(
        userData.createdAt
      )}`}</Text>
    </View>
  );
};

export default Account;
