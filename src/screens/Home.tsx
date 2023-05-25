import { View } from "react-native";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { doc, getFirestore, onSnapshot } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useRecoilState } from "recoil";
import { homeStyles } from "../../styles/home";
import { user } from "../atoms/atoms";
import Closet from "../components/Closet";
import Credits from "../components/Credits";
import HomeHeader from "../components/HomeHeader";
import { app } from "../firebase/firebase";

const auth = getAuth(app);
const db = getFirestore(app);

const Home = () => {
  const { container } = homeStyles;
  const { navigate } = useNavigation();
  const [userData, setUserData] = useRecoilState(user);

  useEffect(() => {
    let unsubSnapshot: () => void;

    const unsubAuthState = onAuthStateChanged(auth, (user) => {
      if (user) {
        unsubSnapshot = onSnapshot(doc(db, "users", user.uid), (doc) => {
          const data = doc.data();

          setUserData({
            ...userData,
            email: data!.email,
            imageURL: data!.imageURL,
            name: data!.name,
            credits: data!.credits,
          });
        });

        navigate("Home Screen");
      } else {
        unsubSnapshot();
        navigate("Login Signup");
      }
    });

    return unsubAuthState;
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
