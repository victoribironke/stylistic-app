import { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { FONTS } from "../../styles/general";
import Login from "../components/Login";
import { loginSignupStyles } from "../../styles/login-signup";
import Signup from "../components/Signup";
import { useNavigation } from "@react-navigation/native";
import { doc, onSnapshot } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { useSetRecoilState } from "recoil";
import { loadingState, userState } from "../atoms/atoms";
import { auth, db } from "../firebase/firebase";

const LoginSignup = () => {
  const { footerText, container, footer, footerButton } = loginSignupStyles;
  const [isLogin, setIsLogin] = useState(true);
  const { navigate } = useNavigation();
  const setUserData = useSetRecoilState(userState);
  const setIsLoading = useSetRecoilState(loadingState);

  useEffect(() => {
    let unsubSnapshot: () => void;

    const unsubAuthState = onAuthStateChanged(auth, (user) => {
      if (user) {
        unsubSnapshot = onSnapshot(doc(db, "users", user.uid), (doc) => {
          const data = doc.data();
          setUserData({
            uid: user.uid,
            email: data!.email,
            imageURL: data!.imageURL,
            name: data!.name,
            credits: data!.credits,
            closetItems: data!.closetItems,
            createdAt: data!.createdAt,
          });

          setIsLoading("");
          navigate("Home Screen");
        });
      } else {
        navigate("Login Signup");
      }
    });

    return () => {
      unsubAuthState();
      unsubSnapshot();
    };
  }, []);

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
