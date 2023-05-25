import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { FONTS } from "../../styles/general";
import Login from "../components/Login";
import { loginSignupStyles } from "../../styles/login-signup";
import Signup from "../components/Signup";

const LoginSignup = () => {
  const { footerText, container, footer, footerButton } = loginSignupStyles;
  const [isLogin, setIsLogin] = useState(true);

  return (
    <View style={container}>
      {isLogin ? <Login /> : <Signup />}

      <View style={footer}>
        <Text style={[{ fontFamily: FONTS.regular }, footerText]}>
          {isLogin ? "Don't have an account?" : "Have an account?"}
        </Text>
        <TouchableOpacity
          style={footerButton}
          onPress={() => setIsLogin((prev) => !prev)}
        >
          <Text style={[{ fontFamily: FONTS.medium }, footerText]}>
            {isLogin ? "Sign up" : "Log in"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginSignup;
