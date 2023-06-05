export type ItemProps = {
  colors: string[];
  type: string;
  subtype: string;
  imageURL: string;
  id: string;
};

export type ItemsProps = {
  data: ItemProps[];
};

export type ScrollViewItemProps = {
  data: ItemProps[];
  text: string;
};

export type OtherHeaderProps = { title: string };

export type CreditCategoryProps = {
  isSelected?: boolean;
  quantity: number;
  cost: number;
  onPress?: () => void;
};

export type SelectProps = {
  arr: string[];
  selectedIndex: number; // it means the index of the default item in the array
  type: boolean;
};

export type ImageDataRes = {
  colors: { red: number; blue: number; green: number; alpha?: number }[];
  labels: string[];
};
