import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD60IYfOFPIXsXfeyDB_PDUoKpKiuOeL1U",
  authDomain: "stylistic-io.firebaseapp.com",
  projectId: "stylistic-io",
  storageBucket: "stylistic-io.appspot.com",
  messagingSenderId: "529281247144",
  appId: "1:529281247144:web:73611c51a7408b63645f9d",
  measurementId: "G-Z8QQC7CLMD",
};

export const app = initializeApp(firebaseConfig);
