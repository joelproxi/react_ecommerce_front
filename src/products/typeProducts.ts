type Category = {
  id: number;
  name: string;
};

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
  category: Category;
};

interface ProductsData {
  content: Product[];
  first: boolean;
  last: boolean;
  number: number;
  size: number;
  totalElements: number;
  totalPages: number;
}

export type { Category, Product, ProductsData };
