import { app } from "../firebase/firebase";
import { useState } from "react";
import { error, user } from "../atoms/atoms";
import { validateEmail } from "../utils/helpers";
import { useRecoilState } from "recoil";
import { loginSignupStyles } from "../../styles/login-signup";
import { profilePlaceholder } from "../utils/image-paths";
import { getFirestore, setDoc, doc } from "firebase/firestore";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(app);
const db = getFirestore(app);

const Signup = () => {
  const [email, setEmail] = useState("");
  const [fullname, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useRecoilState(user);
  const [errorState, setError] = useRecoilState(error);

  const { formView, input, actionButton, actionText, errorText } =
    loginSignupStyles;

  const handleAuth = async () => {
    setError("");

    if (validateEmail(email)) {
      try {
        const user = await (
          await createUserWithEmailAndPassword(auth, email, password)
        ).user;

        await setDoc(doc(db, "users", user.uid), {
          email: user.email,
          uid: user.uid,
          name: fullname,
          imageURL: profilePlaceholder(fullname),
          credits: 100,
        });

        await setDoc(doc(db, "user-mappings", user.email!), { uid: user.uid });

        setUserData({ ...userData, uid: user.uid });
      } catch (e) {
        setError("Email already in use");
      }
    } else setError("Invalid email address");
  };

  return (
    <>
      <View style={formView}>
        <TextInput
          placeholder="Full Name"
          style={input}
          value={fullname}
          onChangeText={(text) => setFullName(text)}
        />
        <TextInput
          placeholder="Email"
          style={input}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          placeholder="Password"
          style={input}
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
        />
      </View>

      <Text
        style={[{ display: errorState === "" ? "none" : "flex" }, errorText]}
      >
        {errorState}
      </Text>

      <TouchableOpacity style={actionButton} onPress={handleAuth}>
        <Text style={actionText}>Sign up</Text>
      </TouchableOpacity>
    </>
  );
};

export default Signup;
