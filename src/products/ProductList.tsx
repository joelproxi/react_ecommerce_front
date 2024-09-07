import { Product } from "./typeProducts";

type Props = {
  products: Product[];
};

export default function ProductList({ products }: Props) {
  return (
    <>
      {products?.map((product, index) => {
        return (
          <div key={index}>
            <h4> {product.name} </h4>
            <p> {product.description}</p>
            <hr />
            <br />
            <br />
          </div>
        );
      })}
    </>
  );
}
