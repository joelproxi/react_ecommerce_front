import React, { useEffect, useState } from "react";
import { IProductsData } from "./typeProducts";
import getProducts from "./getProducts";
import ProductList from "./ProductList";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const ProductsPage = () => {
  const BASE_API = process.env.REACT_APP_BASE_API;
  const API_V1 = process.env.REACT_APP_V1;

  const [productsData, setProductsData] = useState<IProductsData>(Object);

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
        <NavBar/>
        <header className="bg-dark py-5">
          <div className="container px-4 px-lg-5 my-5">
            <div className="text-center text-white">
              <h1 className="display-4 fw-bolder">Shop in style</h1>
              <p className="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
            </div>
          </div>
        </header>


        <section className="py-5">
          <div className="container px-4 px-lg-5 mt-5">
            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
              <ProductList products={productsData?.content}/>
            </div>
          </div>
        </section>
        <Footer/>
      </>
  );
};

export default ProductsPage;
