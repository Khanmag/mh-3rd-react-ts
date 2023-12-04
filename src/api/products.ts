export const getProducts = (): ProductItemType[] => {
  return [
    {
      id: 1,
      name: "Колбаса",
      price: 300,
      count: 4,
    },
    {
      id: 2,
      name: "Хлеб",
      price: 50,
      count: 3,
    },
    {
      id: 3,
      name: "Масло",
      price: 500,
      count: 5,
    },
    {
      id: 4,
      name: "Сыр",
      price: 200,
      count: 8,
    },
  ];
};

export type ProductItemType = {
  id: number;
  name: string;
  price: number;
  count: number | null;
};
