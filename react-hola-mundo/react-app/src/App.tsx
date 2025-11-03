import { useState } from "react";

function App() {
  const [products, setProducts] = useState([{ id: 1, name: "Iphone" }]);

  const handleClick = () => {
    const newProduct = { id: 2, name: "Android" };
    // const newProducts = [newProduct, ...products];
    const newProducts = products.map((product) =>
      product.id === 1 ? { ...product, name: "Windows" } : product
    );
    setProducts(newProducts);
  };

  return (
    <div>
      <button onClick={handleClick}>Enviar</button>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
