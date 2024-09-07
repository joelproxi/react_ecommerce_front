import { ProductsData } from "./typeProducts";

export default async function getProducts(REACT_APP_BASE_API: string) {
  const response = await fetch(REACT_APP_BASE_API, {
    headers: {
      "Content-Type": "applicartion/json",
    },
  });
  const body = (await response.json()) as ProductsData;
  return body;
}
