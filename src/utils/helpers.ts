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
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  let result = " ";
  const charactersLength = characters.length;
  for (let i = 0; i < 10; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
};
