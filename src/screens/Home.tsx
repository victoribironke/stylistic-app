import { View } from "react-native";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { doc, onSnapshot } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { useSetRecoilState } from "recoil";
import { homeStyles } from "../../styles/home";
import { loadingState, userState } from "../atoms/atoms";
import Closet from "../components/Closet";
import Credits from "../components/Credits";
import HomeHeader from "../components/HomeHeader";
import { auth, db } from "../firebase/firebase";

const Home = () => {
  const { container } = homeStyles;
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
      <HomeHeader />
      <Credits />
      <Closet />
    </View>
  );
};

export default Home;
