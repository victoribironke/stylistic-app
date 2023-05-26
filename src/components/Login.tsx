import { app } from "../firebase/firebase";
import { useState } from "react";
import { loadingState, userState } from "../atoms/atoms";
import { validateEmail } from "../utils/helpers";
import { useRecoilState } from "recoil";
import { loginSignupStyles } from "../../styles/login-signup";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";

import { COLORS, formStyles } from "../../styles/general";

const auth = getAuth(app);

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [viewPassword, setViewPassword] = useState(false);
  const [userData, setUserData] = useRecoilState(userState);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useRecoilState(loadingState);

  const {
    actionButton,
    actionText,
    errorText,
    passwordIcon,
    passwordView,
    loadingText,
  } = loginSignupStyles;
  const { formView, input } = formStyles;

  const handleAuth = async () => {
    setError("");

    if (validateEmail(email)) {
      try {
        setIsLoading("Logging in...");

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
        <View style={passwordView}>
          <TextInput
            placeholder="Password"
            style={input}
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={!viewPassword}
          />
          <Feather
            name={!viewPassword ? "eye" : "eye-off"}
            size={24}
            color={COLORS.deepOrange}
            style={passwordIcon}
            onPress={() => setViewPassword((prev) => !prev)}
          />
        </View>
      </View>

      <Text style={[{ display: error === "" ? "none" : "flex" }, errorText]}>
        {error}
      </Text>

      <Text
        style={[{ display: isLoading === "" ? "none" : "flex" }, loadingText]}
      >
        {isLoading}
      </Text>

      <TouchableOpacity style={actionButton} onPress={handleAuth}>
        <Text style={actionText}>Login</Text>
      </TouchableOpacity>
    </>
  );
};

export default Login;
