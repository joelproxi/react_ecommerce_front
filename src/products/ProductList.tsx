import { IProduct } from "./typeProducts";
import React from "react";
import {Link} from "react-router-dom";

type Props = {
  products: IProduct[];
};

export default function ProductList({ products }: Props) {
  return (
    <>
      {products?.map((product) => {
        return (
            <div key={product.id} className="col mb-5">
              <div className="card h-100">
                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..."/>
                <div className="card-body p-4">
                  <div className="text-center">
                    <h5 className="fw-bolder"> { product.name } </h5>
                    XAF { product.price }
                  </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    <Link className="btn btn-outline-dark mt-auto" to={`/products/${product.id}`}>View options</Link>
                  </div>
                </div>
              </div>
            </div>
        );

      })}
    </>
  );
}
