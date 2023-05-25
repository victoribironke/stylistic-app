import Select from "../components/Select";
import OtherHeader from "../components/OtherHeader";
import { app } from "../firebase/firebase";
import { user } from "../atoms/atoms";
import { homeStyles } from "../../styles/home";
import { accountStyles } from "../../styles/account";
import { getAuth, signOut } from "firebase/auth";
import { useRecoilValue, useResetRecoilState } from "recoil";
import { Text, TouchableOpacity, View, Image } from "react-native";

const auth = getAuth(app);

const Account = () => {
  const userData = useRecoilValue(user);
  const resetUserState = useResetRecoilState(user);

  const {
    container,
    detailsView,
    textView,
    emailText,
    nameText,
    recSettings,
    save,
    saveText,
  } = accountStyles;
  const { profileImage } = homeStyles;

  const imageURI = {
    uri: userData.imageURL,
  };

  const signOutUser = () => {
    resetUserState();
    signOut(auth);
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

      <View style={recSettings}>
        <Select arr={["1", "2"]} selectedIndex={1} />
        <TouchableOpacity style={save}>
          <Text style={saveText}>Save</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={signOutUser}>
        <Text>Sign out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Account;
