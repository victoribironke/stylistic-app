import { atom } from "recoil";

export const userState = atom({
  key: "user",
  default: {
    uid: "",
    imageURL: "",
    name: "",
    email: "",
    closetItems: null,
    credits: 0,
  },
});

export const selectedItemState = atom({
  key: "selected item",
  default: {
    imageURL:
      "https://firebasestorage.googleapis.com/v0/b/stylistic-io.appspot.com/o/brennan-burling-ay53qag90W8-unsplash.jpg?alt=media&token=c25f6b83-7eca-49fc-a3bd-c9de39f51d39",
    colors: [""],
    type: "",
    subType: "",
  },
});

export const loadingState = atom({
  key: "loading",
  default: "",
});
