import { app } from "../firebase/firebase";
import { useState } from "react";
import { error, user } from "../atoms/atoms";
import { validateEmail } from "../utils/helpers";
import { useRecoilState } from "recoil";
import { loginSignupStyles } from "../../styles/login-signup";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

const auth = getAuth(app);

const Login = () => {
  const [email, setEmail] = useState("");
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
          await signInWithEmailAndPassword(auth, email, password)
        ).user;

        setUserData({ ...userData, uid: user.uid });
      } catch (e) {
        setError("Email or password is incorrect");
      }
    } else setError("Invalid email address");
  };

  return (
    <>
      <View style={formView}>
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
        <Text style={actionText}>Login</Text>
      </TouchableOpacity>
    </>
  );
};

export default Login;
