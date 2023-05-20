export type ItemProps = {
  colors: string[];
  type: string;
  subType: string;
  imageURL: string;
  id?: number;
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
};
