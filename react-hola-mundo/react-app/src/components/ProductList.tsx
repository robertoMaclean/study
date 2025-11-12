import Reac from "react";

type Product = {
  id: string;
  name: string;
};

type Props = {
  products: Product[];
};

function ProductList({ products }: Props) {
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>{product.name}</li>
      ))}
    </ul>
  );
}

export default ProductList;
