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
