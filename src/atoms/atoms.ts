import { atom } from "recoil";

export const userState = atom({
  key: "user",
  default: {
    uid: "",
    imageURL: "",
    name: "",
    email: "",
    closetItems: [],
    credits: 0,
    createdAt: "",
  },
});

export const selectedItemState = atom({
  key: "selected item",
  default: {
    type: "",
    subtype: "",
    sleeve: "",
    fabric: "",
    cut: "",
    waist: "",
    pattern: "",
    id: "",
    colors: [""],
    neck: "",
  },
});

export const loadingState = atom({
  key: "loading",
  default: "",
});

export const selectionState = atom({
  key: "selections",
  default: {
    type: "",
    subtype: "",
    sleeve: "",
    fabric: "",
    cut: "",
    waist: "",
    pattern: "",
    mainColor: "",
    accentColors: [""],
    neck: "",
  },
});
