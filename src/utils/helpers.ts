import { StyleSheet } from "react-native";
import { ItemProps } from "../types/general";

export const getStyles = (display: "flex" | "none") =>
  StyleSheet.create({ show: { display } });

export const splitArr = (arr: ItemProps[]) => {
  const dataOne: ItemProps[] = arr.filter((item, i) => i % 2 === 0);
  const dataTwo: ItemProps[] = arr.filter((item, i) => i % 2 === 1);

  return [dataOne, dataTwo];
};
