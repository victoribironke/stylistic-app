const sortingFn = (a: string, b: string): number => (a > b ? 1 : -1);

export const clothingTypes = [
  "Top",
  "Socks",
  "Shorts",
  "Trousers",
  "Footwear",
  "Headwear",
];

const headwear = ["Face cap", "Beanie", "Bucket hat", "Beret", "Hat"].sort(
  sortingFn
);

const footwear = [
  "Sneakers",
  "Court shoe",
  "Sandals",
  "Wedges",
  "High heels",
  "Crocs",
  "Boots",
  "Slippers",
  "Flip flops",
].sort(sortingFn);

const tops = [
  "Polo",
  "Vintage",
  "Crop top",
  "T-shirt",
  "Hoodie",
  "Office shirt",
  "Sweater/Cardigan",
].sort(sortingFn);

const trousers = [
  "Jeans",
  "Bell bottoms",
  "Leggings",
  "Joggers",
  "Cargo",
  "Chinos",
  "Corduroy",
].sort(sortingFn);

const shorts = ["Jeans", "Cargo", "Chinos", "Corduroy"].sort(sortingFn);

const socks = ["Ankle socks", "Leg warmers", "Knee highs"].sort(sortingFn);

export const subtypes = { tops, socks, shorts, trousers, footwear, headwear };
