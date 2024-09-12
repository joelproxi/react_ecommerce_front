interface ICategory {
  id: number;
  name: string;
}

interface IProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
  category: ICategory;
}

interface IProductsData {
  content: IProduct[];
  first: boolean;
  last: boolean;
  number: number;
  size: number;
  totalElements: number;
  totalPages: number;
}

export type { ICategory, IProduct, IProductsData };
