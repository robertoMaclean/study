import Reac, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  onClick: () => void;
};

function ProductList({ children, onClick }: Props) {
  return <button onClick={onClick}>{children}</button>;
}

export default ProductList;
