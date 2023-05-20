import { atom } from "recoil";

export const user = atom({
  key: "user",
  default: { imageURL: "", name: "", email: "", closetItems: null },
});
