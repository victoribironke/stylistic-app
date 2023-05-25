import { atom } from "recoil";

export const user = atom({
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

export const selectedItem = atom({
  key: "selected item",
  default: { imageURL: "", colors: [""], type: "", subType: "" },
});

export const error = atom({
  key: "error",
  default: "",
});
