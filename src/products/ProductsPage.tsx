import React, { useEffect, useState } from "react";
import { ProductsData } from "./typeProducts";
import getProducts from "./getProducts";
import ProductList from "./ProductList";

const ProductsPage = () => {
  const BASE_API = process.env.REACT_APP_BASE_API;
  const API_V1 = process.env.REACT_APP_V1;

  const [productsData, setProductsData] = useState<ProductsData>(Object);

  useEffect(() => {
    let cancel = false;

    if (!cancel) {
      console.log(BASE_API);
      getProducts(`${BASE_API}/${API_V1}/products`).then((body) => {
        console.log(body);
        setProductsData(body);
      });
    }
    return () => {
      cancel = true;
    };
  }, []);

  return (
    <>
      <h1>List de produits</h1>
      <ProductList products={productsData.content} />
    </>
  );
};

export default ProductsPage;
