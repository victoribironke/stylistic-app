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
    imageURL: "",
    colors: [""],
    type: "",
    id: "",
    subtype: "",
  },
});

export const loadingState = atom({
  key: "loading",
  default: "",
});

export const currentTypeState = atom({
  key: "types",
  default: { type: "Select type", subtype: "Select subtype" },
});
