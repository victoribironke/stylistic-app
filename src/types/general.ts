export type ItemProps = {
  colors: string[];
  type: string;
  subType: string;
  imageURL: string;
  id?: number;
};

export type ItemsProps = {
  filter: string;
  data: ItemProps[];
};
