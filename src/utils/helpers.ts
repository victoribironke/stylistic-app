import { ItemProps } from "../types/general";

export const splitArr = (arr: ItemProps[]) => {
  const topsArr: ItemProps[] = [];
  const socksArr: ItemProps[] = [];
  const shortsArr: ItemProps[] = [];
  const trousersArr: ItemProps[] = [];
  const footwearArr: ItemProps[] = [];
  const headwearArr: ItemProps[] = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].type === "Top") topsArr.push(arr[i]);
    else if (arr[i].type === "Socks") socksArr.push(arr[i]);
    else if (arr[i].type === "Shorts") shortsArr.push(arr[i]);
    else if (arr[i].type === "Trousers") trousersArr.push(arr[i]);
    else if (arr[i].type === "Footwear") footwearArr.push(arr[i]);
    else if (arr[i].type === "Headwear") headwearArr.push(arr[i]);
  }

  return {
    topsArr,
    socksArr,
    shortsArr,
    trousersArr,
    footwearArr,
    headwearArr,
  };
};

export const randomString = () => {
  return `id_${new Date().getTime()}`;
};

export const validateEmail = (email: string) => {
  const isValid =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      email
    );

  return isValid;
};

export const rgbToHex = (r: number, g: number, b: number): string => {
  return "#" + [r, g, b].map((x) => x.toString(16).padStart(2, "0")).join("");
};
